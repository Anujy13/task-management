const employee = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile the monthly sales report and send it to the manager.",
        taskDate: "2025-04-07",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Records",
        taskDescription: "Ensure all client contact details are up to date in the CRM.",
        taskDate: "2025-03-25",
        category: "Data Entry"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sanya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create mockups for the new campaign landing page.",
        taskDate: "2025-04-08",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login issue affecting mobile users.",
        taskDate: "2025-04-01",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Market Research",
        taskDescription: "Research competitor pricing strategies.",
        taskDate: "2025-04-07",
        category: "Research"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Schedule Team Meeting",
        taskDescription: "Book a slot and send invites for the team sync-up.",
        taskDate: "2025-03-30",
        category: "Administration"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Draft Project Proposal",
        taskDescription: "Prepare initial draft of the new project proposal.",
        taskDate: "2025-04-07",
        category: "Planning"
      }
    ]
  },
  {
    id: 5,
    firstName: "Devansh",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Inventory Audit",
        taskDescription: "Conduct audit of current warehouse inventory.",
        taskDate: "2025-03-28",
        category: "Logistics"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Coordinate Vendor Meeting",
        taskDescription: "Arrange a call with new supplier to discuss terms.",
        taskDate: "2025-04-09",
        category: "Coordination"
      }
    ]
  }
];

  
  
  const admins = [
    {
        "id": 1,
        firstName: "Anuj",
        "email": "admin@example.com",
        "password": "123"
      }
      
  ];


  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee))
    localStorage.setItem('admins', JSON.stringify(admins))
  }

  export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admins'))

    return {employee, admin}
  }

