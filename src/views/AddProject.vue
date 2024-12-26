<template>
  <div v-if="isAuthenticated" class="add-project-container">
    <h2>Add New Project</h2>
    <form @submit.prevent="addProject">
      <div class="form-field">
        <label for="title">Title</label>
        <input v-model="newProject.title" type="text" id="title" required />
      </div>
      <div class="form-field">
        <label for="location">Location</label>
        <input v-model="newProject.location" type="text" id="location" required />
      </div>
      <div class="form-field">
        <label for="stat">Status</label>
        <input v-model="newProject.stat" type="text" id="stat" required />
      </div>
      <div class="form-field">
        <label for="description">Description</label>
        <textarea v-model="newProject.description" id="description" required></textarea>
      </div>
      <div class="form-field">
        <label for="images">Upload Images</label>
        <input type="file" multiple @change="handleFileUpload" />
      </div>

      <!-- Display the selected images with Remove option -->
      <div v-if="newProject.images.length > 0" class="image-preview">
        <h4>Selected Images</h4>
        <div v-for="(image, index) in newProject.images" :key="index" class="image-item">
          <img :src="image" alt="Uploaded image" class="image-thumbnail" />
          <button @click="removeImage(index)" type="button">Remove</button>
        </div>
      </div>

      <button type="submit">Add Project</button>
    </form>

    <h2>Project List</h2>
    <div v-if="projects.length > 0" class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <h3>{{ project.title }}</h3>
        <p><strong>Location:</strong> {{ project.location }}</p>
        <p><strong>Status:</strong> {{ project.stat }}</p>
        <p><strong>Description:</strong> {{ project.description }}</p>
        <button @click="editProject(index)">Edit</button>
        <button @click="deleteProject(index)">Delete</button>
      </div>
    </div>
    <div v-else>
      <p>No projects available.</p>
    </div>
  </div>

  <div v-else class="login-container">
    <h2>Admin Login</h2>
    <form @submit.prevent="login">
      <div class="form-field">
        <label for="username">Username</label>
        <input v-model="loginDetails.username" type="text" id="username" required />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input v-model="loginDetails.password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isAuthenticated = ref(false);
const loginDetails = ref({ username: "", password: "" });
const adminCredentials = { username: "admin", password: "password123" };

const router = useRouter();

const login = () => {
  if (
    loginDetails.value.username === adminCredentials.username &&
    loginDetails.value.password === adminCredentials.password
  ) {
    isAuthenticated.value = true;
    loadProjects();
  } else {
    alert("Invalid login credentials!");
  }
};

const projects = ref([]);
const newProject = ref({
  title: "",
  location: "",
  stat: "",
  description: "",
  images: [],
});

const handleFileUpload = (event) => {
  const files = event.target.files;
  const readerPromises = Array.from(files).map((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  });

  Promise.all(readerPromises).then((images) => {
    newProject.value.images.push(...images);
  });
};

// Remove image from the uploaded list
const removeImage = (index) => {
  newProject.value.images.splice(index, 1);
};

const addProject = () => {
  projects.value.push({ ...newProject.value });
  localStorage.setItem("projects", JSON.stringify(projects.value));
  resetForm();
  router.push("/project");
};

const loadProjects = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.value = storedProjects;
};

const editProject = (index) => {
  const project = projects.value[index];
  newProject.value = { ...project };
  deleteProject(index); 
};

const deleteProject = (index) => {
  projects.value.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects.value));
};

const resetForm = () => {
  newProject.value = {
    title: "",
    location: "",
    stat: "",
    description: "",
    images: [],
  };
};
</script>


<style scoped>
.add-project-container,
.login-container {
  padding: 20px;
}

.form-field {
  margin-bottom: 10px;
}

label {
  display: block;
  font-size: 1.1rem;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

button:hover {
  background-color: #0056b3;
}

.project-list {
  margin-top: 20px;
}

.project-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.image-preview {
  margin-top: 10px;
}

.image-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.image-thumbnail {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
}

.image-item button {
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
}

.image-item button:hover {
  background-color: #c82333;
}
</style>

