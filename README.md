# 🚀 Employee Management System | Three-Tier DevOps Project

<p align="center">
  <img src="https://img.shields.io/badge/Project-Three--Tier-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"/>
</p>

## 🌟 Project Overview

A full-stack **Employee Management System** built using React, Node.js, Express.js, and MongoDB, integrated with modern DevOps tools and practices.

This project demonstrates end-to-end application deployment using Docker, Jenkins CI/CD, Docker Hub, and Kubernetes.

### ✨ Application Features

- ➕ Add new employees
- 📋 View employee records
- ✏️ Update employee details
- 🗑️ Delete employee records
- 🗄️ Store employee data in MongoDB

## 🏗️ Three-Tier Architecture

```text
              👨‍💻 Developer
                    |
                    v
                 🐙 GitHub
                    |
                    v
                ⚙️ Jenkins
                 CI/CD
                    |
          +---------+---------+
          |                   |
          v                   v
     🐳 Backend Image    🐳 Frontend Image
          |                   |
          +---------+---------+
                    |
                    v
                🐳 Docker Hub
                    |
                    v
                ☸️ Kubernetes
                  Minikube
                    |
          +---------+---------+
          |         |         |
          v         v         v
       ⚛️ React  🟢 Node.js  🍃 MongoDB
       Frontend   Backend    Database
```

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| 🎨 Frontend | React.js, Vite |
| ⚙️ Backend | Node.js, Express.js |
| 🗄️ Database | MongoDB |
| 🐳 Containerization | Docker |
| 📦 Container Management | Docker Compose |
| 🔄 CI/CD | Jenkins |
| 🐙 Version Control | Git, GitHub |
| ☁️ Image Registry | Docker Hub |
| ☸️ Orchestration | Kubernetes |
| 🖥️ Local Cluster | Minikube |
| 📈 Auto Scaling | HPA |
| 🔐 Access Control | RBAC |
| 💾 Persistent Storage | PVC |

## 📁 Project Structure

```text
three-tier-devops-project/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
│
├── k8s/
│   ├── namespace.yaml
│   ├── mongo-deployment.yaml
│   ├── mongo-service.yaml
│   ├── mongo-pvc.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── hpa.yaml
│   └── rbac.yaml
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## 🐳 Docker & Docker Compose

**Build Docker images**

```bash
docker compose build
```

**Start application**

```bash
docker compose up -d
```

**Check running containers**

```bash
docker ps
```

🌐 **Application URL:** http://localhost:3000

**Stop application**

```bash
docker compose down
```

## 🔄 Jenkins CI/CD Pipeline

Jenkins automates the application build and Docker image publishing process.

### ⚙️ Pipeline Workflow

1. 🐙 Checkout source code from GitHub
2. 🏗️ Build backend application
3. ⚛️ Build frontend application
4. 🐳 Build Docker images
5. 🔐 Authenticate with Docker Hub using Jenkins credentials
6. 📤 Push images to Docker Hub

### 🐳 Docker Hub Images

**Backend Image**

`shatakshixcloud/three-tier-devops-backend`

**Frontend Image**

`shatakshixcloud/three-tier-devops-frontend`

🏷️ Images are published with build-number and `latest` tags.

## ☸️ Kubernetes Deployment

The application is deployed on a local Kubernetes cluster using Minikube.

**Start Minikube**

```bash
minikube start --driver=docker
```

**Deploy Kubernetes resources**

```bash
kubectl apply -f k8s/
```

**Check Pods**

```bash
kubectl get pods -n three-tier
```

**Check Deployments**

```bash
kubectl get deployments -n three-tier
```

**Check Services**

```bash
kubectl get services -n three-tier
```

**Access application**

```bash
minikube service frontend-service -n three-tier --url
```

## 📈 Horizontal Pod Autoscaler (HPA)

HPA automatically adjusts application Pod replicas based on CPU utilization.

### ⚙️ HPA Configuration

- 🎯 CPU Target: 50%
- 🔽 Minimum Replicas: 1
- 🔼 Maximum Replicas: 5
- ⚛️ Backend and Frontend Auto Scaling

**Enable Metrics Server**

```bash
minikube addons enable metrics-server
```

**Check HPA**

```bash
kubectl get hpa -n three-tier
```

**Check resource metrics**

```bash
kubectl top pods -n three-tier
```

## 🔐 Kubernetes RBAC

Role-Based Access Control manages permissions within the Kubernetes namespace.

### 🛡️ RBAC Resources

- 👤 ServiceAccount: `devops-viewer`
- 🔑 Role: `pod-viewer`
- 🔗 RoleBinding: `pod-viewer-binding`

**Apply RBAC**

```bash
kubectl apply -f k8s/rbac.yaml
```

**Verify RBAC**

```bash
kubectl get role,rolebinding,serviceaccount -n three-tier
```

## 💾 Persistent Storage

MongoDB uses Kubernetes PersistentVolumeClaim (PVC) for persistent database storage.

- 🗄️ Storage: 1Gi
- 🔒 Access Mode: ReadWriteOnce
- ✅ PVC Status: Bound

**Check PVC**

```bash
kubectl get pvc -n three-tier
```

## 🔍 Useful Kubernetes Commands

```bash
kubectl get all -n three-tier
```

```bash
kubectl get pods -n three-tier -o wide
```

```bash
kubectl get hpa -n three-tier
```

```bash
kubectl logs deployment/backend -n three-tier
```

```bash
kubectl describe deployment backend -n three-tier
```

## 🎯 Key DevOps Concepts Learned

- 🏗️ Three-Tier Application Architecture
- 🐙 Git & GitHub Version Control
- 🐳 Docker Image Creation
- 📦 Docker Compose
- 🔄 Jenkins CI/CD Pipeline
- ☁️ Docker Hub Image Publishing
- ☸️ Kubernetes Deployments & Services
- 🏷️ Kubernetes Namespaces
- 💾 Persistent Volume Claims
- 📈 Horizontal Pod Autoscaling
- 📊 Metrics Server
- 🔐 Kubernetes RBAC
- 🛠️ Application Deployment & Troubleshooting

## 👩‍💻 Author

**Shatakshi Sinha**

🐙 GitHub: [Shatakshi033](https://github.com/Shatakshi033)

## 🏆 Project Status

<details>
<summary>✅ Core Implementation Completed</summary>

- ✅ React Frontend
- ✅ Node.js Backend
- ✅ MongoDB Database
- ✅ Docker & Docker Compose
- ✅ Jenkins CI/CD Pipeline
- ✅ Docker Hub Image Publishing
- ✅ Kubernetes Deployment
- ✅ HPA Auto Scaling Configuration
- ✅ RBAC Configuration
- ✅ Persistent Storage

</details>

---

<p align="center">
  <b>⭐ If you find this project useful, please give this repository a star!</b>
  <br/>
  <b>🚀 Built with passion and DevOps learning.</b>
</p>
