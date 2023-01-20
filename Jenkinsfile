pipeline {
    agent any

    stages {
        stage('NPM Install') {
          withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
              sh 'npm install'
          }
        }
        stage('Build') {
            steps {
                milestone()
                sh 'ng build' 
            }
        }
        stage('Deploy') {
          milestone()
          echo "Deploying..."
        }
    }
}
