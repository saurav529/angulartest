#!/bin/bash

read -p "Enter Commit Message  : " message
echo "Message =  $message!"

rm -rf docs
ng build --prod --output-path docs --base-href /angulartest/
git add src/*
git add docs
git add docs/*
git add deploy.sh
# shellcheck disable=SC2078
if [ message ]; then
  git commit -m "$message"
else
  git commit -m "$(date +"Pushed Changes on %D at %r")"
fi
clear
git push origin master
