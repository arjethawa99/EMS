// localStorage.clear();

const empolyee = [
    {
      "id": 1,
      "email": "john.doe@example.com",
      "password": "123",
      "firstname": "John",
      "task_count": 1,
      "active_count": 1,
      "complete_count": 0,
      "failed_count": 0,
      "new_count": 1,
      "tasks": [
        {
          "task_title": "Develop Login Page",
          "task_description": "Create a responsive login page with validation.",
          "category": "Development",
          "task_date": "2025-01-04",
          "activeTask": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "jane.smith@example.com",
      "password": "123",
      "firstname": "Jane",
      "task_count": 1,
      "active_count": 0,
      "complete_count": 1,
      "failed_count": 0,
      "new_count": 0,
      "tasks": [
        {
          "task_title": "Design Homepage",
          "task_description": "Design a modern, user-friendly homepage layout.",
          "category": "Design",
          "task_date": "2024-12-20",
          "activeTask": false,
          "newTask": false,
          "complete": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "alice.johnson@example.com",
      "password": "123",
      "firstname": "Alice",
      "task_count": 1,
      "active_count": 0,
      "complete_count": 0,
      "failed_count": 1,
      "new_count": 1,
      "tasks": [
        {
          "task_title": "Database Optimization",
          "task_description": "Optimize queries and improve database performance.",
          "category": "Database",
          "task_date": "2025-01-03",
          "activeTask": false,
          "newTask": true,
          "complete": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "bob.martin@example.com",
      "password": "123",
      "firstname": "Bob",
      "task_count": 2,
      "active_count": 0,
      "complete_count": 2,
      "failed_count": 0,
      "new_count": 0,
      "tasks": [
        {
          "task_title": "Create API Endpoints",
          "task_description": "Develop RESTful API endpoints for user authentication.",
          "category": "Backend",
          "task_date": "2024-12-18",
          "activeTask": false,
          "newTask": false,
          "complete": true,
          "failed": false
        },
        {
          "task_title": "Update Documentation",
          "task_description": "Update API documentation to reflect new changes.",
          "category": "Backend",
          "task_date": "2024-12-19",
          "activeTask": false,
          "newTask": false,
          "complete": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "eve.white@example.com",
      "password": "123",
      "firstname": "Eve",
      "task_count": 1,
      "active_count": 1,
      "complete_count": 0,
      "failed_count": 0,
      "new_count": 1,
      "tasks": [
        {
          "task_title": "Write Unit Tests",
          "task_description": "Write unit tests for existing components to ensure stability.",
          "category": "Testing",
          "task_date": "2025-01-02",
          "activeTask": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    }
  ];
  

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123",
        "firstname": "Admin Controller",
    }
]

export const setLocalStorage = () => {
    localStorage.setItem("empolyee", JSON.stringify(empolyee));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("empolyee"));
    const AdminData = JSON.parse(localStorage.getItem("admin"));

    // console.log(employeeData,AdminData);
    return { employeeData, AdminData }
}