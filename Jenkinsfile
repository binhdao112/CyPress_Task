pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/integration/**/**")
        choice(name: "BROWsER", choices: ["chrome","edge","firefox"])
    }
    tools{
        nodejs '18.3'
    }
    stages{
        stage("Building"){
            steps{
                echo "Building the application"
            }
        }
        stage("Testing"){
            steps{
                sh "npm install"
                sh "npm audit fix --force"
                sh "npm run allure:clear"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC} --env allure=true"
                sh "npm run posttest"
            }
        }
        stage("Deploying"){
            steps{
                echo "Deploying"
            }
        }
        stage('reports') {
            steps {
                script {
                    allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'target/allure-results']]
                            ])
                        }
                    }
            }
        stage('Send mail') {

            steps {
                //def mailRecipients = ""
               // def jobName = currentBuild.fullDisplayName
                // script{
                //     emailext(body: 'dfsdfsd',
                //     subject: "[Jenkins]",
                //     to: "0932907271binh@gmail.com",
                //     replyTo: "")
                // }
                emailext body: 'áda', subject: 'alo', to: '0932907271binh@gmail.com'
                //recipientProviders: [[$class: 'CulpritsRecipientProvider']]
                 //   mail(body: 'test', subject: 'Test '+{$env.JOB_NAME}, to: '0932907271binh@gmail.com')
                //mail(body: readFile('cypress/reports/index.html'),mimeType: 'text/html', subject: 'Test '+{$env.JOB_NAME}, to: '0932907271binh@gmail.com')
            }
        }
        
    
    }
}
