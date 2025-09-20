-- Updated student data with passwords
-- Replace the existing INSERT statement in supabase-schema.sql with this

INSERT INTO students (
    student_id, name, email, password, phone, date_of_birth, address, course, semester, year, 
    roll_number, profile_image, attendance_percentage, cgpa, fees_paid, fees_total, 
    hostel_room, transport_route
) VALUES 
('STU001', 'Johnathan Smith', 'johnathan.smith@university.edu', 'password123', '+1-555-0101', '2002-03-15', 
 '123 University Ave, Campus City, CC 12345', 'Computer Science', 3, 2024, 'CS2024001',
 'https://i.pinimg.com/564x/02/57/5a/02575a7f282496587321016584281308.jpg', 85.5, 8.7, 45000, 50000, 'H-201', 'Route A - Downtown'),

('STU002', 'Emily Johnson', 'emily.johnson@university.edu', 'emily2024', '+1-555-0102', '2002-07-22',
 '456 College St, Campus City, CC 12346', 'Computer Science', 3, 2024, 'CS2024002',
 'https://i.pinimg.com/564x/03/58/6b/03586b7f282496587321016584281309.jpg', 92.3, 9.2, 50000, 50000, 'H-205', 'Route B - Suburbs'),

('STU003', 'Michael Brown', 'michael.brown@university.edu', 'mike123', '+1-555-0103', '2001-11-08',
 '789 Student Blvd, Campus City, CC 12347', 'Computer Science', 3, 2024, 'CS2024003',
 'https://i.pinimg.com/564x/04/59/7c/04597c7f282496587321016584281310.jpg', 78.9, 7.8, 40000, 50000, 'H-210', 'Route A - Downtown'),

('STU004', 'Sarah Davis', 'sarah.davis@university.edu', 'sarah456', '+1-555-0104', '2002-01-14',
 '321 Academic Way, Campus City, CC 12348', 'Computer Science', 3, 2024, 'CS2024004',
 'https://i.pinimg.com/564x/05/60/8d/05608d7f282496587321016584281311.jpg', 88.7, 8.9, 50000, 50000, 'H-215', 'Route C - Airport'),

('STU005', 'David Wilson', 'david.wilson@university.edu', 'david789', '+1-555-0105', '2001-09-30',
 '654 Education Dr, Campus City, CC 12349', 'Computer Science', 3, 2024, 'CS2024005',
 'https://i.pinimg.com/564x/06/61/9e/06619e7f282496587321016584281312.jpg', 95.2, 9.5, 50000, 50000, 'H-220', 'Route B - Suburbs'),

('STU006', 'Jessica Martinez', 'jessica.martinez@university.edu', 'jessica2024', '+1-555-0106', '2002-05-18',
 '987 Learning Ln, Campus City, CC 12350', 'Computer Science', 3, 2024, 'CS2024006',
 'https://i.pinimg.com/564x/07/62/af/0762af7f282496587321016584281313.jpg', 82.1, 8.3, 45000, 50000, 'H-225', 'Route A - Downtown'),

('STU007', 'Christopher Anderson', 'christopher.anderson@university.edu', 'chris123', '+1-555-0107', '2001-12-03',
 '147 Knowledge St, Campus City, CC 12351', 'Computer Science', 3, 2024, 'CS2024007',
 'https://i.pinimg.com/564x/08/63/c0/0863c07f282496587321016584281314.jpg', 90.8, 9.0, 50000, 50000, 'H-230', 'Route C - Airport'),

('STU008', 'Amanda Taylor', 'amanda.taylor@university.edu', 'amanda456', '+1-555-0108', '2002-08-12',
 '258 Study Ave, Campus City, CC 12352', 'Computer Science', 3, 2024, 'CS2024008',
 'https://i.pinimg.com/564x/09/64/d1/0964d17f282496587321016584281315.jpg', 87.4, 8.6, 50000, 50000, 'H-235', 'Route B - Suburbs'),

('STU009', 'Ryan Thomas', 'ryan.thomas@university.edu', 'ryan789', '+1-555-0109', '2001-04-25',
 '369 Campus Rd, Campus City, CC 12353', 'Computer Science', 3, 2024, 'CS2024009',
 'https://i.pinimg.com/564x/10/65/e2/1065e27f282496587321016584281316.jpg', 79.6, 7.9, 40000, 50000, 'H-240', 'Route A - Downtown'),

('STU010', 'Lisa Garcia', 'lisa.garcia@university.edu', 'lisa2024', '+1-555-0110', '2002-10-07',
 '741 Scholar St, Campus City, CC 12354', 'Computer Science', 3, 2024, 'CS2024010',
 'https://i.pinimg.com/564x/11/66/f3/1166f37f282496587321016584281317.jpg', 93.7, 9.3, 50000, 50000, 'H-245', 'Route C - Airport');
