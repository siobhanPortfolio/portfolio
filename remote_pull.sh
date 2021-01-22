ssh -i  ~/.ssh/siobhan_homepage.pem ec2-user@52.87.154.239 << EOF
  ls some_folder; 
  ./someaction.sh 'some params'
  pwd
  ./some_other_action 'other params'
EOF