function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p>Student's Name: Nguyen Van A</p>
              <p>Student ID: 12345678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: student@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Class</h3>
              <p>Class: 42-000064-04003</p>
              <p>Midterm Exam: Application interfaces development</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Cake Zone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;