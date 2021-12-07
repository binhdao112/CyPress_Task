pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/intergration/**/**")
        choice(name: "BROWsER", choices: ["chrome","edge","firefox"])
    }
    stages{
        stage("Building"){
            steps{
                echo "Building the application"
            }
        }
        stage("Testing"){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage("Deploying"){
            steps{
                echo "END"
            }
        }


    }
}