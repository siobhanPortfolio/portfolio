ssh -i  ~/.ssh/siobhan_homepage.pem ec2-user@52.87.154.239 << EOF
  cd /home/ec2-user/portfolio
  git pull origin main
  echo "Exiting with $?"
EOF