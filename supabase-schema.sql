-- Supabase Database Schema for ERP-Zi Student Management System

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Students table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    address TEXT,
    course VARCHAR(50),
    semester INTEGER,
    year INTEGER,
    roll_number VARCHAR(20) UNIQUE,
    profile_image TEXT,
    attendance_percentage DECIMAL(5,2) DEFAULT 0,
    cgpa DECIMAL(3,2) DEFAULT 0,
    fees_paid DECIMAL(10,2) DEFAULT 0,
    fees_total DECIMAL(10,2) DEFAULT 0,
    hostel_room VARCHAR(20),
    transport_route VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assignments table
CREATE TABLE IF NOT EXISTS assignments (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    assignment_name VARCHAR(200) NOT NULL,
    course VARCHAR(20) NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'submitted', 'graded', 'late')),
    max_marks INTEGER DEFAULT 100,
    submitted_marks INTEGER,
    description TEXT,
    file_url TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE,
    graded_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    course VARCHAR(20) NOT NULL,
    date DATE NOT NULL,
    status VARCHAR(10) NOT NULL CHECK (status IN ('present', 'absent', 'late')),
    time TIME,
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grades table
CREATE TABLE IF NOT EXISTS grades (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    course_code VARCHAR(20) NOT NULL,
    course_name VARCHAR(100) NOT NULL,
    credits INTEGER DEFAULT 4,
    internal_marks INTEGER,
    external_marks INTEGER,
    total_marks INTEGER,
    grade VARCHAR(5),
    grade_points DECIMAL(3,2),
    semester INTEGER,
    academic_year VARCHAR(10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fees table
CREATE TABLE IF NOT EXISTS fees (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    fee_type VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue')),
    payment_date DATE,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100),
    remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Hostel applications table
CREATE TABLE IF NOT EXISTS hostel_applications (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    application_type VARCHAR(50) NOT NULL,
    from_date DATE NOT NULL,
    to_date DATE NOT NULL,
    reason TEXT NOT NULL,
    details TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    approved_by VARCHAR(100),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) DEFAULT 'info' CHECK (type IN ('info', 'warning', 'success', 'error')),
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_students_student_id ON students(student_id);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_roll_number ON students(roll_number);
CREATE INDEX IF NOT EXISTS idx_assignments_student_id ON assignments(student_id);
CREATE INDEX IF NOT EXISTS idx_assignments_course ON assignments(course);
CREATE INDEX IF NOT EXISTS idx_attendance_student_id ON attendance(student_id);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(date);
CREATE INDEX IF NOT EXISTS idx_grades_student_id ON grades(student_id);
CREATE INDEX IF NOT EXISTS idx_fees_student_id ON fees(student_id);
CREATE INDEX IF NOT EXISTS idx_notifications_student_id ON notifications(student_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for students table
CREATE TRIGGER update_students_updated_at 
    BEFORE UPDATE ON students 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO students (
    student_id, name, email, password, phone, date_of_birth, address, course, semester, year, 
    roll_number, profile_image, attendance_percentage, cgpa, fees_paid, fees_total, 
    hostel_room, transport_route
) VALUES 
('STU001', 'Johnathan Smith', 'johnathan.smith@university.edu', '+1-555-0101', '2002-03-15', 
 '123 University Ave, Campus City, CC 12345', 'Computer Science', 3, 2024, 'CS2024001',
 'https://i.pinimg.com/564x/02/57/5a/02575a7f282496587321016584281308.jpg', 85.5, 8.7, 45000, 50000, 'H-201', 'Route A - Downtown'),

('STU002', 'Emily Johnson', 'emily.johnson@university.edu', '+1-555-0102', '2002-07-22',
 '456 College St, Campus City, CC 12346', 'Computer Science', 3, 2024, 'CS2024002',
 'https://i.pinimg.com/564x/03/58/6b/03586b7f282496587321016584281309.jpg', 92.3, 9.2, 50000, 50000, 'H-205', 'Route B - Suburbs'),

('STU003', 'Michael Brown', 'michael.brown@university.edu', '+1-555-0103', '2001-11-08',
 '789 Student Blvd, Campus City, CC 12347', 'Computer Science', 3, 2024, 'CS2024003',
 'https://i.pinimg.com/564x/04/59/7c/04597c7f282496587321016584281310.jpg', 78.9, 7.8, 40000, 50000, 'H-210', 'Route A - Downtown'),

('STU004', 'Sarah Davis', 'sarah.davis@university.edu', '+1-555-0104', '2002-01-14',
 '321 Academic Way, Campus City, CC 12348', 'Computer Science', 3, 2024, 'CS2024004',
 'https://i.pinimg.com/564x/05/60/8d/05608d7f282496587321016584281311.jpg', 88.7, 8.9, 50000, 50000, 'H-215', 'Route C - Airport'),

('STU005', 'David Wilson', 'david.wilson@university.edu', '+1-555-0105', '2001-09-30',
 '654 Education Dr, Campus City, CC 12349', 'Computer Science', 3, 2024, 'CS2024005',
 'https://i.pinimg.com/564x/06/61/9e/06619e7f282496587321016584281312.jpg', 95.2, 9.5, 50000, 50000, 'H-220', 'Route B - Suburbs'),

('STU006', 'Jessica Martinez', 'jessica.martinez@university.edu', '+1-555-0106', '2002-05-18',
 '987 Learning Ln, Campus City, CC 12350', 'Computer Science', 3, 2024, 'CS2024006',
 'https://i.pinimg.com/564x/07/62/af/0762af7f282496587321016584281313.jpg', 82.1, 8.3, 45000, 50000, 'H-225', 'Route A - Downtown'),

('STU007', 'Christopher Anderson', 'christopher.anderson@university.edu', '+1-555-0107', '2001-12-03',
 '147 Knowledge St, Campus City, CC 12351', 'Computer Science', 3, 2024, 'CS2024007',
 'https://i.pinimg.com/564x/08/63/c0/0863c07f282496587321016584281314.jpg', 90.8, 9.0, 50000, 50000, 'H-230', 'Route C - Airport'),

('STU008', 'Amanda Taylor', 'amanda.taylor@university.edu', '+1-555-0108', '2002-08-12',
 '258 Study Ave, Campus City, CC 12352', 'Computer Science', 3, 2024, 'CS2024008',
 'https://i.pinimg.com/564x/09/64/d1/0964d17f282496587321016584281315.jpg', 87.4, 8.6, 50000, 50000, 'H-235', 'Route B - Suburbs'),

('STU009', 'Ryan Thomas', 'ryan.thomas@university.edu', '+1-555-0109', '2001-04-25',
 '369 Campus Rd, Campus City, CC 12353', 'Computer Science', 3, 2024, 'CS2024009',
 'https://i.pinimg.com/564x/10/65/e2/1065e27f282496587321016584281316.jpg', 79.6, 7.9, 40000, 50000, 'H-240', 'Route A - Downtown'),

('STU010', 'Lisa Garcia', 'lisa.garcia@university.edu', '+1-555-0110', '2002-10-07',
 '741 Scholar St, Campus City, CC 12354', 'Computer Science', 3, 2024, 'CS2024010',
 'https://i.pinimg.com/564x/11/66/f3/1166f37f282496587321016584281317.jpg', 93.7, 9.3, 50000, 50000, 'H-245', 'Route C - Airport');

-- Insert sample assignments
INSERT INTO assignments (student_id, assignment_name, course, due_date, status, max_marks, submitted_marks, description) VALUES
(1, 'CS201 - Data Structures Lab 1', 'CS201', '2024-11-15', 'pending', 100, NULL, 'Implement basic data structures: Array, Linked List, Stack, Queue'),
(1, 'CS202 - Algorithm Analysis', 'CS202', '2024-11-20', 'submitted', 100, NULL, 'Analyze time and space complexity of sorting algorithms'),
(1, 'CS203 - Database Design', 'CS203', '2024-11-10', 'graded', 100, 95, 'Design ER diagram and normalize database schema'),
(2, 'CS201 - Data Structures Lab 1', 'CS201', '2024-11-15', 'graded', 100, 98, 'Implement basic data structures: Array, Linked List, Stack, Queue'),
(2, 'CS202 - Algorithm Analysis', 'CS202', '2024-11-20', 'submitted', 100, NULL, 'Analyze time and space complexity of sorting algorithms'),
(3, 'CS201 - Data Structures Lab 1', 'CS201', '2024-11-15', 'late', 100, 75, 'Implement basic data structures: Array, Linked List, Stack, Queue');

-- Insert sample attendance
INSERT INTO attendance (student_id, course, date, status, time) VALUES
(1, 'CS201', '2024-11-01', 'present', '09:00'),
(1, 'CS202', '2024-11-01', 'present', '10:00'),
(1, 'CS203', '2024-11-01', 'absent', '11:00'),
(1, 'CS201', '2024-11-02', 'present', '09:00'),
(1, 'CS202', '2024-11-02', 'late', '10:15'),
(2, 'CS201', '2024-11-01', 'present', '09:00'),
(2, 'CS202', '2024-11-01', 'present', '10:00'),
(2, 'CS203', '2024-11-01', 'present', '11:00');

-- Insert sample grades
INSERT INTO grades (student_id, course_code, course_name, credits, internal_marks, external_marks, total_marks, grade, grade_points, semester, academic_year) VALUES
(1, 'CS101', 'Introduction to Programming', 4, 28, 65, 93, 'A+', 10, 1, '2023-24'),
(1, 'MA101', 'Calculus I', 4, 25, 55, 80, 'A', 9, 1, '2023-24'),
(1, 'PH101', 'Physics I', 3, 22, 50, 72, 'B+', 8, 1, '2023-24'),
(1, 'EE101', 'Basic Electronics', 3, 26, 60, 86, 'A', 9, 1, '2023-24'),
(1, 'EN101', 'Technical Communication', 2, 27, 58, 85, 'A', 9, 1, '2023-24'),
(1, 'CS102', 'Programming Lab', 2, 29, 69, 98, 'A+', 10, 1, '2023-24'),
(2, 'CS101', 'Introduction to Programming', 4, 30, 68, 98, 'A+', 10, 1, '2023-24'),
(2, 'MA101', 'Calculus I', 4, 28, 62, 90, 'A+', 10, 1, '2023-24'),
(2, 'PH101', 'Physics I', 3, 25, 55, 80, 'A', 9, 1, '2023-24');

-- Insert sample fees
INSERT INTO fees (student_id, fee_type, amount, due_date, status, payment_date, payment_method) VALUES
(1, 'Tuition Fee', 25000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(1, 'Hostel Fee', 15000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(1, 'Library Fee', 2000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(1, 'Transport Fee', 3000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(1, 'Exam Fee', 5000, '2024-11-01', 'pending', NULL, NULL),
(2, 'Tuition Fee', 25000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(2, 'Hostel Fee', 15000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(2, 'Library Fee', 2000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(2, 'Transport Fee', 3000, '2024-09-01', 'paid', '2024-08-25', 'Online Banking'),
(2, 'Exam Fee', 5000, '2024-11-01', 'paid', '2024-10-25', 'Online Banking');

-- Insert sample notifications
INSERT INTO notifications (student_id, title, message, type) VALUES
(1, 'Assignment Reminder', 'CS203 Project Phase 1 due in 3 days', 'warning'),
(1, 'Fee Payment Due', 'Exam fee of ₹5,000 is due on Nov 1st', 'warning'),
(1, 'Assignment Graded', 'CS201 - Lab 1 has been graded (95/100)', 'success'),
(1, 'Hostel Application', 'Your leave application has been approved', 'info'),
(2, 'Assignment Reminder', 'CS202 Algorithm Analysis due tomorrow', 'warning'),
(2, 'Grade Update', 'Your CS201 assignment has been graded (98/100)', 'success');

-- Enable Row Level Security (RLS)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE hostel_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS (adjust based on your authentication setup)
-- For now, allowing all operations - you should implement proper authentication
CREATE POLICY "Allow all operations on students" ON students FOR ALL USING (true);
CREATE POLICY "Allow all operations on assignments" ON assignments FOR ALL USING (true);
CREATE POLICY "Allow all operations on attendance" ON attendance FOR ALL USING (true);
CREATE POLICY "Allow all operations on grades" ON grades FOR ALL USING (true);
CREATE POLICY "Allow all operations on fees" ON fees FOR ALL USING (true);
CREATE POLICY "Allow all operations on hostel_applications" ON hostel_applications FOR ALL USING (true);
CREATE POLICY "Allow all operations on notifications" ON notifications FOR ALL USING (true);
