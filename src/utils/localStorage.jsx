const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix bug",
        taskDescription: "Resolve the critical issue in the payment module.",
        taskDate: "2025-03-20",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write unit tests",
        taskDescription:
          "Create unit tests for the user authentication module.",
        taskDate: "2025-03-22",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code review",
        taskDescription: "Review the recent PR for the dashboard feature.",
        taskDate: "2025-03-21",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize performance",
        taskDescription: "Improve the response time of the reports module.",
        taskDate: "2025-03-25",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update documentation",
        taskDescription: "Revise the API documentation for v2 release.",
        taskDate: "2025-03-24",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Deploy app",
        taskDescription: "Deploy the latest build to the staging server.",
        taskDate: "2025-03-26",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Refactor code",
        taskDescription: "Refactor the login module for better readability.",
        taskDate: "2025-03-23",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Test functionality",
        taskDescription: "Perform regression testing on the checkout process.",
        taskDate: "2025-03-28",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Review PR",
        taskDescription:
          "Review and approve the latest PR from the frontend team.",
        taskDate: "2025-03-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Implement feature",
        taskDescription: "Develop the new user onboarding feature.",
        taskDate: "2025-03-30",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
}