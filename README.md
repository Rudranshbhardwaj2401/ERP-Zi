# ERP-Zi Student Management System

A comprehensive student management system built with HTML, CSS, JavaScript, and Supabase for backend services.

## Features

- **Student Dashboard**: Overview of academic progress, attendance, and upcoming tasks
- **Profile Management**: Student profile with personal and academic information
- **Attendance Tracking**: Course-wise attendance monitoring and analytics
- **Assignment Management**: Submit, track, and view assignment grades
- **Fees & Ledger**: Fee payment tracking and outstanding dues management
- **Hostel Management**: Leave applications and hostel-related services
- **Library Services**: Book management and library resources
- **Exam & Results**: Grade tracking and academic performance analysis
- **Timetable**: Weekly class schedule and academic calendar
- **Transport**: Transport pass management and route information

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL database, Authentication, Storage)
- **Charts**: Chart.js for data visualization
- **Icons**: Custom SVG icons

## Setup Instructions

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard and copy the following:
   - Project URL
   - Anon (public) key

3. Update the configuration in `supabase-config.js`:
   ```javascript
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

### 2. Database Setup

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `supabase-schema.sql`
3. Run the SQL script to create all tables
4. Copy and paste the contents of `student-data-with-passwords.sql`
5. Run the SQL script to insert sample data with passwords

### 3. Storage Setup

1. In your Supabase dashboard, go to Storage
2. Create a new bucket named `assignments`
3. Set the bucket to public if you want direct file access

### 4. Local Development

1. Clone or download the project files
2. Open `login.html` in a web browser to start the application
3. Use any of the provided student credentials to log in
4. The application will load with the authenticated student's data

## Sample Data & Login Credentials

The system includes sample data for 10 students with login credentials:

### Student Login Credentials:

1. **Johnathan Smith** (STU001)
   - Email: `johnathan.smith@university.edu`
   - Password: `password123`

2. **Emily Johnson** (STU002)
   - Email: `emily.johnson@university.edu`
   - Password: `emily2024`

3. **Michael Brown** (STU003)
   - Email: `michael.brown@university.edu`
   - Password: `mike123`

4. **Sarah Davis** (STU004)
   - Email: `sarah.davis@university.edu`
   - Password: `sarah456`

5. **David Wilson** (STU005)
   - Email: `david.wilson@university.edu`
   - Password: `david789`

6. **Jessica Martinez** (STU006)
   - Email: `jessica.martinez@university.edu`
   - Password: `jessica2024`

7. **Christopher Anderson** (STU007)
   - Email: `christopher.anderson@university.edu`
   - Password: `chris123`

8. **Amanda Taylor** (STU008)
   - Email: `amanda.taylor@university.edu`
   - Password: `amanda456`

9. **Ryan Thomas** (STU009)
   - Email: `ryan.thomas@university.edu`
   - Password: `ryan789`

10. **Lisa Garcia** (STU010)
    - Email: `lisa.garcia@university.edu`
    - Password: `lisa2024`

### Student Data Includes:
- Personal information (name, email, phone, address, etc.)
- Academic data (attendance, grades, assignments)
- Financial information (fees paid, outstanding dues)
- Hostel and transport details
- Authentication credentials

## Database Schema

### Tables

- **students**: Student profile and basic information
- **assignments**: Assignment details and submission status
- **attendance**: Daily attendance records
- **grades**: Academic performance and grades
- **fees**: Fee structure and payment tracking
- **hostel_applications**: Hostel leave applications
- **notifications**: System notifications for students

### Key Features

- **Row Level Security (RLS)**: Enabled for all tables
- **Foreign Key Constraints**: Proper relationships between tables
- **Indexes**: Optimized for common queries
- **Triggers**: Automatic timestamp updates

## File Structure

```
ERP-Zi-main/
├── student.html              # Main student dashboard
├── supabase-config.js        # Supabase configuration and sample data
├── supabase-schema.sql       # Database schema and sample data
├── README.md                 # This file
├── ERP-Zi Logo.png          # Application logo
└── ERP-Photoroom.png        # Additional assets
```

## Usage

### For Students

1. **Dashboard**: View academic overview and quick stats
2. **Profile**: Update personal information and view academic details
3. **Attendance**: Check attendance percentage and detailed records
4. **Assignments**: Submit assignments and view grades
5. **Fees**: Track fee payments and outstanding dues
6. **Hostel**: Apply for leave and manage hostel services
7. **Library**: Access library resources and book management
8. **Exams**: View grades and academic performance
9. **Timetable**: Check class schedule and academic calendar
10. **Transport**: Manage transport pass and route information

### For Administrators

- Access Supabase dashboard to manage student data
- Use SQL editor to run queries and updates
- Monitor system usage and performance
- Manage file uploads in Storage section

## Customization

### Adding New Students

1. Insert new records in the `students` table
2. Add related data in other tables (assignments, attendance, etc.)
3. Update the sample data arrays in `supabase-config.js` if needed

### Modifying UI

- Edit `student.html` for layout and styling changes
- Update CSS variables in the `<style>` section for theme customization
- Modify JavaScript functions for new functionality

### Database Modifications

- Use Supabase SQL editor to alter table structures
- Update the schema file for version control
- Modify the Supabase service class for new operations

## Security Considerations

- Update RLS policies based on your authentication requirements
- Implement proper user authentication and authorization
- Use environment variables for sensitive configuration
- Enable HTTPS for production deployment

## Support

For issues and questions:
1. Check the Supabase documentation
2. Review the browser console for JavaScript errors
3. Verify database connections and permissions
4. Ensure all required files are properly linked

## License

This project is for educational and demonstration purposes.
