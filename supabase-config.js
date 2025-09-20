// Supabase Configuration
const SUPABASE_URL = 'https://icuaeagfuiapaxjusysu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljdWFlYWdmdWlhcGF4anVzeXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNDI5OTMsImV4cCI6MjA3MzkxODk5M30.iN5fO5AdnxpaV60DZSDx6Tc_BYl4jGbwaOaglbr0ZXI';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Sample student data for demo/fallback
const sampleStudents = [
    {
        id: 1,
        name: 'Johnathan Smith',
        email: 'johnathan.smith@university.edu',
        password: 'password123',
        phone: '+91 98765 43210',
        course: 'B.Sc. Computer Science',
        semester: 3,
        fees_paid: 6252.50,
        fees_total: 7502.50,
        cgpa: 8.7,
        attendance_percentage: 92.5,
        profile_image: 'https://i.pinimg.com/564x/02/57/5a/02575a7f282496587321016584281308.jpg'
    },
    {
        id: 2,
        name: 'Emily Johnson',
        email: 'emily.johnson@university.edu',
        password: 'emily2024',
        phone: '+91 98765 43211',
        course: 'B.Sc. Computer Science',
        semester: 3,
        fees_paid: 7000.00,
        fees_total: 7502.50,
        cgpa: 8.9,
        attendance_percentage: 94.2,
        profile_image: 'https://i.pinimg.com/564x/03/58/6b/03586b7f282496587321016584281309.jpg'
    },
    {
        id: 3,
        name: 'Michael Brown',
        email: 'michael.brown@university.edu',
        password: 'mike123',
        phone: '+91 98765 43212',
        course: 'B.Sc. Mathematics',
        semester: 2,
        fees_paid: 5500.00,
        fees_total: 7000.00,
        cgpa: 8.4,
        attendance_percentage: 89.1,
        profile_image: 'https://i.pinimg.com/564x/04/59/7c/04597c7f282496587321016584281310.jpg'
    },
    {
        id: 4,
        name: 'Sarah Davis',
        email: 'sarah.davis@university.edu',
        password: 'sarah456',
        phone: '+91 98765 43213',
        course: 'B.Sc. Computer Science',
        semester: 3,
        fees_paid: 6800.00,
        fees_total: 7502.50,
        cgpa: 8.8,
        attendance_percentage: 91.3,
        profile_image: 'https://i.pinimg.com/564x/05/60/8d/05608d7f282496587321016584281311.jpg'
    },
    {
        id: 5,
        name: 'David Wilson',
        email: 'david.wilson@university.edu',
        password: 'david789',
        phone: '+91 98765 43214',
        course: 'B.Sc. Computer Science',
        semester: 3,
        fees_paid: 7502.50,
        fees_total: 7502.50,
        cgpa: 9.1,
        attendance_percentage: 96.7,
        profile_image: 'https://i.pinimg.com/564x/06/61/9e/06619e7f282496587321016584281312.jpg'
    }
];

// Sample assignments data
const sampleAssignments = [
    // Johnathan Smith (ID: 1)
    {
        id: 1,
        student_id: 1,
        assignment_name: 'Project Phase 1: Database Design',
        course_code: 'CS203',
        description: 'Design ER diagram and normalize database schema',
        assigned_date: '2025-10-10',
        due_date: '2025-11-15',
        status: 'pending',
        marks_obtained: null,
        total_marks: 50
    },
    {
        id: 2,
        student_id: 1,
        assignment_name: 'Problem Set 3: Advanced Calculus',
        course_code: 'MA201',
        description: 'Solve integration and differential problems',
        assigned_date: '2025-10-20',
        due_date: '2025-10-30',
        status: 'pending',
        marks_obtained: null,
        total_marks: 30
    },
    {
        id: 3,
        student_id: 1,
        assignment_name: 'Lab 1: Stack Implementation',
        course_code: 'CS201',
        description: 'Create stack data structure with all operations',
        assigned_date: '2025-10-01',
        due_date: '2025-10-15',
        status: 'graded',
        marks_obtained: 95,
        total_marks: 100
    },
    // Emily Johnson (ID: 2)
    {
        id: 4,
        student_id: 2,
        assignment_name: 'Web Development Project',
        course_code: 'CS204',
        description: 'Build a responsive website using HTML, CSS, and JavaScript',
        assigned_date: '2025-10-15',
        due_date: '2025-11-20',
        status: 'submitted',
        marks_obtained: null,
        total_marks: 100
    },
    {
        id: 5,
        student_id: 2,
        assignment_name: 'Data Structures Lab 2',
        course_code: 'CS201',
        description: 'Implement Queue and Priority Queue',
        assigned_date: '2025-10-05',
        due_date: '2025-10-20',
        status: 'graded',
        marks_obtained: 98,
        total_marks: 100
    },
    // Michael Brown (ID: 3)
    {
        id: 6,
        student_id: 3,
        assignment_name: 'Calculus Problem Set 4',
        course_code: 'MA201',
        description: 'Solve differential equations and limits',
        assigned_date: '2025-10-12',
        due_date: '2025-10-25',
        status: 'pending',
        marks_obtained: null,
        total_marks: 40
    },
    {
        id: 7,
        student_id: 3,
        assignment_name: 'Linear Algebra Assignment',
        course_code: 'MA202',
        description: 'Matrix operations and vector spaces',
        assigned_date: '2025-10-08',
        due_date: '2025-10-18',
        status: 'graded',
        marks_obtained: 87,
        total_marks: 100
    },
    // Sarah Davis (ID: 4)
    {
        id: 8,
        student_id: 4,
        assignment_name: 'Algorithm Analysis Report',
        course_code: 'CS202',
        description: 'Analyze time complexity of sorting algorithms',
        assigned_date: '2025-10-18',
        due_date: '2025-11-05',
        status: 'submitted',
        marks_obtained: null,
        total_marks: 75
    },
    {
        id: 9,
        student_id: 4,
        assignment_name: 'Database Normalization',
        course_code: 'CS203',
        description: 'Normalize database tables to 3NF',
        assigned_date: '2025-10-03',
        due_date: '2025-10-17',
        status: 'graded',
        marks_obtained: 92,
        total_marks: 100
    },
    // David Wilson (ID: 5)
    {
        id: 10,
        student_id: 5,
        assignment_name: 'Machine Learning Project',
        course_code: 'CS205',
        description: 'Implement a simple neural network',
        assigned_date: '2025-10-20',
        due_date: '2025-11-25',
        status: 'pending',
        marks_obtained: null,
        total_marks: 150
    },
    {
        id: 11,
        student_id: 5,
        assignment_name: 'Software Engineering Assignment',
        course_code: 'CS206',
        description: 'Design patterns and UML diagrams',
        assigned_date: '2025-10-10',
        due_date: '2025-10-24',
        status: 'graded',
        marks_obtained: 96,
        total_marks: 100
    }
];

// Sample attendance data
const sampleAttendance = [
    // Johnathan Smith (ID: 1)
    {
        id: 1,
        student_id: 1,
        course_code: 'CS201',
        course_name: 'Data Structures',
        date: '2025-09-19',
        time_slot: '09:00 - 10:00',
        status: 'present',
        faculty_name: 'Dr. Alan Turing',
        topic_covered: 'Binary Trees Implementation'
    },
    {
        id: 2,
        student_id: 1,
        course_code: 'MA201',
        course_name: 'Calculus II',
        date: '2025-09-18',
        time_slot: '10:00 - 11:00',
        status: 'present',
        faculty_name: 'Dr. Ada Lovelace',
        topic_covered: 'Integration by Parts'
    },
    {
        id: 3,
        student_id: 1,
        course_code: 'CS202',
        course_name: 'Algorithms',
        date: '2025-09-18',
        time_slot: '11:00 - 12:00',
        status: 'absent',
        faculty_name: 'Dr. Grace Hopper',
        topic_covered: 'Quick Sort Analysis'
    },
    // Emily Johnson (ID: 2)
    {
        id: 4,
        student_id: 2,
        course_code: 'CS204',
        course_name: 'Web Development',
        date: '2025-09-19',
        time_slot: '09:00 - 10:00',
        status: 'present',
        faculty_name: 'Dr. Tim Berners-Lee',
        topic_covered: 'CSS Grid Layout'
    },
    {
        id: 5,
        student_id: 2,
        course_code: 'CS201',
        course_name: 'Data Structures',
        date: '2025-09-18',
        time_slot: '10:00 - 11:00',
        status: 'present',
        faculty_name: 'Dr. Alan Turing',
        topic_covered: 'Queue Implementation'
    },
    {
        id: 6,
        student_id: 2,
        course_code: 'CS202',
        course_name: 'Algorithms',
        date: '2025-09-18',
        time_slot: '11:00 - 12:00',
        status: 'present',
        faculty_name: 'Dr. Grace Hopper',
        topic_covered: 'Merge Sort Analysis'
    },
    // Michael Brown (ID: 3)
    {
        id: 7,
        student_id: 3,
        course_code: 'MA201',
        course_name: 'Calculus II',
        date: '2025-09-19',
        time_slot: '09:00 - 10:00',
        status: 'present',
        faculty_name: 'Dr. Ada Lovelace',
        topic_covered: 'Partial Derivatives'
    },
    {
        id: 8,
        student_id: 3,
        course_code: 'MA202',
        course_name: 'Linear Algebra',
        date: '2025-09-18',
        time_slot: '10:00 - 11:00',
        status: 'late',
        faculty_name: 'Dr. Carl Gauss',
        topic_covered: 'Matrix Operations'
    },
    {
        id: 9,
        student_id: 3,
        course_code: 'MA203',
        course_name: 'Discrete Mathematics',
        date: '2025-09-18',
        time_slot: '11:00 - 12:00',
        status: 'absent',
        faculty_name: 'Dr. Leonhard Euler',
        topic_covered: 'Graph Theory'
    },
    // Sarah Davis (ID: 4)
    {
        id: 10,
        student_id: 4,
        course_code: 'CS202',
        course_name: 'Algorithms',
        date: '2025-09-19',
        time_slot: '09:00 - 10:00',
        status: 'present',
        faculty_name: 'Dr. Grace Hopper',
        topic_covered: 'Dynamic Programming'
    },
    {
        id: 11,
        student_id: 4,
        course_code: 'CS203',
        course_name: 'Database Systems',
        date: '2025-09-18',
        time_slot: '10:00 - 11:00',
        status: 'present',
        faculty_name: 'Dr. Edgar Codd',
        topic_covered: 'SQL Joins'
    },
    {
        id: 12,
        student_id: 4,
        course_code: 'CS201',
        course_name: 'Data Structures',
        date: '2025-09-18',
        time_slot: '11:00 - 12:00',
        status: 'present',
        faculty_name: 'Dr. Alan Turing',
        topic_covered: 'Hash Tables'
    },
    // David Wilson (ID: 5)
    {
        id: 13,
        student_id: 5,
        course_code: 'CS205',
        course_name: 'Machine Learning',
        date: '2025-09-19',
        time_slot: '09:00 - 10:00',
        status: 'present',
        faculty_name: 'Dr. Geoffrey Hinton',
        topic_covered: 'Neural Networks'
    },
    {
        id: 14,
        student_id: 5,
        course_code: 'CS206',
        course_name: 'Software Engineering',
        date: '2025-09-18',
        time_slot: '10:00 - 11:00',
        status: 'present',
        faculty_name: 'Dr. Frederick Brooks',
        topic_covered: 'Design Patterns'
    },
    {
        id: 15,
        student_id: 5,
        course_code: 'CS201',
        course_name: 'Data Structures',
        date: '2025-09-18',
        time_slot: '11:00 - 12:00',
        status: 'present',
        faculty_name: 'Dr. Alan Turing',
        topic_covered: 'Graph Algorithms'
    }
];

// Sample grades data
const sampleGrades = [
    // Johnathan Smith (ID: 1)
    {
        id: 1,
        student_id: 1,
        course_code: 'CS101',
        course_name: 'Introduction to Programming',
        semester: 2,
        credits: 4,
        internals: 28,
        externals: 65,
        total: 93,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 2,
        student_id: 1,
        course_code: 'MA101',
        course_name: 'Calculus I',
        semester: 2,
        credits: 4,
        internals: 25,
        externals: 55,
        total: 80,
        grade: 'A',
        grade_points: 9
    },
    {
        id: 3,
        student_id: 1,
        course_code: 'CS201',
        course_name: 'Data Structures',
        semester: 3,
        credits: 4,
        internals: 30,
        externals: 68,
        total: 98,
        grade: 'A+',
        grade_points: 10
    },
    // Emily Johnson (ID: 2)
    {
        id: 4,
        student_id: 2,
        course_code: 'CS101',
        course_name: 'Introduction to Programming',
        semester: 2,
        credits: 4,
        internals: 30,
        externals: 70,
        total: 100,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 5,
        student_id: 2,
        course_code: 'MA101',
        course_name: 'Calculus I',
        semester: 2,
        credits: 4,
        internals: 28,
        externals: 62,
        total: 90,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 6,
        student_id: 2,
        course_code: 'CS201',
        course_name: 'Data Structures',
        semester: 3,
        credits: 4,
        internals: 29,
        externals: 69,
        total: 98,
        grade: 'A+',
        grade_points: 10
    },
    // Michael Brown (ID: 3)
    {
        id: 7,
        student_id: 3,
        course_code: 'MA101',
        course_name: 'Calculus I',
        semester: 2,
        credits: 4,
        internals: 26,
        externals: 58,
        total: 84,
        grade: 'A',
        grade_points: 9
    },
    {
        id: 8,
        student_id: 3,
        course_code: 'MA201',
        course_name: 'Calculus II',
        semester: 3,
        credits: 4,
        internals: 24,
        externals: 56,
        total: 80,
        grade: 'A',
        grade_points: 9
    },
    {
        id: 9,
        student_id: 3,
        course_code: 'MA202',
        course_name: 'Linear Algebra',
        semester: 3,
        credits: 4,
        internals: 27,
        externals: 60,
        total: 87,
        grade: 'A',
        grade_points: 9
    },
    // Sarah Davis (ID: 4)
    {
        id: 10,
        student_id: 4,
        course_code: 'CS101',
        course_name: 'Introduction to Programming',
        semester: 2,
        credits: 4,
        internals: 29,
        externals: 67,
        total: 96,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 11,
        student_id: 4,
        course_code: 'MA101',
        course_name: 'Calculus I',
        semester: 2,
        credits: 4,
        internals: 27,
        externals: 60,
        total: 87,
        grade: 'A',
        grade_points: 9
    },
    {
        id: 12,
        student_id: 4,
        course_code: 'CS201',
        course_name: 'Data Structures',
        semester: 3,
        credits: 4,
        internals: 28,
        externals: 66,
        total: 94,
        grade: 'A+',
        grade_points: 10
    },
    // David Wilson (ID: 5)
    {
        id: 13,
        student_id: 5,
        course_code: 'CS101',
        course_name: 'Introduction to Programming',
        semester: 2,
        credits: 4,
        internals: 30,
        externals: 70,
        total: 100,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 14,
        student_id: 5,
        course_code: 'MA101',
        course_name: 'Calculus I',
        semester: 2,
        credits: 4,
        internals: 29,
        externals: 68,
        total: 97,
        grade: 'A+',
        grade_points: 10
    },
    {
        id: 15,
        student_id: 5,
        course_code: 'CS201',
        course_name: 'Data Structures',
        semester: 3,
        credits: 4,
        internals: 30,
        externals: 70,
        total: 100,
        grade: 'A+',
        grade_points: 10
    }
];

// Sample fees data
const sampleFees = [
    // Johnathan Smith (ID: 1)
    {
        id: 1,
        student_id: 1,
        fee_type: 'Tuition Fee (Semester 3)',
        amount: 5000.00,
        due_date: '2025-09-01',
        payment_date: '2025-08-28',
        status: 'paid',
        transaction_id: 'TXN-001198',
        payment_method: 'Bank Transfer'
    },
    {
        id: 2,
        student_id: 1,
        fee_type: 'Hostel Fee (November)',
        amount: 1000.00,
        due_date: '2025-11-05',
        payment_date: null,
        status: 'due',
        transaction_id: null,
        payment_method: null
    },
    {
        id: 3,
        student_id: 1,
        fee_type: 'Exam Fee',
        amount: 250.00,
        due_date: '2025-11-01',
        payment_date: null,
        status: 'due',
        transaction_id: null,
        payment_method: null
    },
    // Emily Johnson (ID: 2)
    {
        id: 4,
        student_id: 2,
        fee_type: 'Tuition Fee (Semester 3)',
        amount: 5000.00,
        due_date: '2025-09-01',
        payment_date: '2025-08-25',
        status: 'paid',
        transaction_id: 'TXN-001199',
        payment_method: 'Online Banking'
    },
    {
        id: 5,
        student_id: 2,
        fee_type: 'Hostel Fee (November)',
        amount: 1000.00,
        due_date: '2025-11-05',
        payment_date: '2025-10-30',
        status: 'paid',
        transaction_id: 'TXN-001200',
        payment_method: 'UPI'
    },
    {
        id: 6,
        student_id: 2,
        fee_type: 'Exam Fee',
        amount: 250.00,
        due_date: '2025-11-01',
        payment_date: '2025-10-25',
        status: 'paid',
        transaction_id: 'TXN-001201',
        payment_method: 'Credit Card'
    },
    // Michael Brown (ID: 3)
    {
        id: 7,
        student_id: 3,
        fee_type: 'Tuition Fee (Semester 2)',
        amount: 4000.00,
        due_date: '2025-09-01',
        payment_date: '2025-08-30',
        status: 'paid',
        transaction_id: 'TXN-001202',
        payment_method: 'Bank Transfer'
    },
    {
        id: 8,
        student_id: 3,
        fee_type: 'Hostel Fee (November)',
        amount: 1000.00,
        due_date: '2025-11-05',
        payment_date: null,
        status: 'due',
        transaction_id: null,
        payment_method: null
    },
    {
        id: 9,
        student_id: 3,
        fee_type: 'Exam Fee',
        amount: 250.00,
        due_date: '2025-11-01',
        payment_date: null,
        status: 'due',
        transaction_id: null,
        payment_method: null
    },
    // Sarah Davis (ID: 4)
    {
        id: 10,
        student_id: 4,
        fee_type: 'Tuition Fee (Semester 3)',
        amount: 5000.00,
        due_date: '2025-09-01',
        payment_date: '2025-08-27',
        status: 'paid',
        transaction_id: 'TXN-001203',
        payment_method: 'Online Banking'
    },
    {
        id: 11,
        student_id: 4,
        fee_type: 'Hostel Fee (November)',
        amount: 1000.00,
        due_date: '2025-11-05',
        payment_date: '2025-10-28',
        status: 'paid',
        transaction_id: 'TXN-001204',
        payment_method: 'UPI'
    },
    {
        id: 12,
        student_id: 4,
        fee_type: 'Exam Fee',
        amount: 250.00,
        due_date: '2025-11-01',
        payment_date: '2025-10-26',
        status: 'paid',
        transaction_id: 'TXN-001205',
        payment_method: 'Debit Card'
    },
    // David Wilson (ID: 5)
    {
        id: 13,
        student_id: 5,
        fee_type: 'Tuition Fee (Semester 3)',
        amount: 5000.00,
        due_date: '2025-09-01',
        payment_date: '2025-08-26',
        status: 'paid',
        transaction_id: 'TXN-001206',
        payment_method: 'Bank Transfer'
    },
    {
        id: 14,
        student_id: 5,
        fee_type: 'Hostel Fee (November)',
        amount: 1000.00,
        due_date: '2025-11-05',
        payment_date: '2025-10-29',
        status: 'paid',
        transaction_id: 'TXN-001207',
        payment_method: 'Online Banking'
    },
    {
        id: 15,
        student_id: 5,
        fee_type: 'Exam Fee',
        amount: 250.00,
        due_date: '2025-11-01',
        payment_date: '2025-10-27',
        status: 'paid',
        transaction_id: 'TXN-001208',
        payment_method: 'UPI'
    }
];

// Authentication function that works with both database and sample data
async function authenticateStudent(email, password) {
    try {
        // First try to get student from Supabase database
        const { data: student, error } = await supabaseClient
            .from('students')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .single();

        if (student && !error) {
            // Update last login time in database
            await supabaseClient
                .from('students')
                .update({ updated_at: new Date().toISOString() })
                .eq('id', student.id);
            
            return student;
        }

        // If not found in database, fall back to sample data
        console.log('Database authentication failed, trying sample data for:', email);
        const sampleStudent = sampleStudents.find(s => s.email === email && s.password === password);
        if (sampleStudent) {
            console.log('Found sample student:', sampleStudent.name, 'ID:', sampleStudent.id);
            return sampleStudent;
        }

        throw new Error('Invalid email or password');
    } catch (error) {
        console.error('Authentication error:', error);
        throw new Error('Login failed. Please check your credentials.');
    }
}

// Supabase database operations
class SupabaseService {
    constructor() {
        this.client = supabaseClient;
    }

    // Student operations
    async getStudent(studentId) {
        const { data, error } = await this.client
            .from('students')
            .select('*')
            .eq('id', studentId)
            .single();
        
        if (error) {
            console.error('Error fetching student:', error);
            return null;
        }
        return data;
    }

    // Assignment operations
    async getAssignments(studentId) {
        const { data, error } = await this.client
            .from('assignments')
            .select('*')
            .eq('student_id', studentId)
            .order('due_date');
        
        if (error) {
            console.error('Error fetching assignments:', error);
            return sampleAssignments.filter(a => a.student_id === studentId);
        }
        return data;
    }

    async updateAssignmentStatus(assignmentId, status, fileUrl = null) {
        const updateData = { status };
        if (fileUrl) {
            updateData.file_url = fileUrl;
        }
        
        const { data, error } = await this.client
            .from('assignments')
            .update(updateData)
            .eq('id', assignmentId)
            .select();
        
        if (error) {
            console.error('Error updating assignment:', error);
            return null;
        }
        return data[0];
    }

    // Attendance operations
    async getAttendance(studentId, course = null) {
        let query = this.client
            .from('attendance')
            .select('*')
            .eq('student_id', studentId)
            .order('date', { ascending: false });
        
        if (course) {
            query = query.eq('course_code', course);
        }
        
        const { data, error } = await query;
        
        if (error) {
            console.error('Error fetching attendance:', error);
            return sampleAttendance.filter(a => a.student_id === studentId);
        }
        return data;
    }

    // Grades operations
    async getGrades(studentId) {
        const { data, error } = await this.client
            .from('grades')
            .select('*')
            .eq('student_id', studentId)
            .order('course_code');
        
        if (error) {
            console.error('Error fetching grades:', error);
            return sampleGrades.filter(g => g.student_id === studentId);
        }
        return data;
    }

    // Fees operations
    async getFees(studentId) {
        const { data, error } = await this.client
            .from('fees')
            .select('*')
            .eq('student_id', studentId)
            .order('due_date');
        
        if (error) {
            console.error('Error fetching fees:', error);
            return sampleFees.filter(f => f.student_id === studentId);
        }
        return data;
    }

    // File upload to Supabase Storage
    async uploadFile(file, bucket = 'assignments', path = null) {
        const fileName = path || `${Date.now()}_${file.name}`;
        
        const { data, error } = await this.client.storage
            .from(bucket)
            .upload(fileName, file);
        
        if (error) {
            console.error('Error uploading file:', error);
            return null;
        }
        
        // Get public URL
        const { data: urlData } = this.client.storage
            .from(bucket)
            .getPublicUrl(fileName);
        
        return urlData.publicUrl;
    }
}

// Initialize service
const supabaseService = new SupabaseService();

// Export for use in other files
window.supabaseService = supabaseService;
window.sampleStudents = sampleStudents;
window.sampleAssignments = sampleAssignments;
window.sampleAttendance = sampleAttendance;
window.sampleGrades = sampleGrades;
window.sampleFees = sampleFees;
window.authenticateStudent = authenticateStudent;