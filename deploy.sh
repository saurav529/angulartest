#rm -rf docs
#ng build --prod --output-path docs --base-href /angulartest/
git add src/*
git add docs
git add docs/*
git add deploy.sh
git commit -m "$(date +"Pushed Changes on %D at %r")"
git push origin master
