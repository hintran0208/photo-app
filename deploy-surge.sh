# Build reacjs app with production mode
npm run build 

# Move to build folder 
cd build 

# Clone index.htm to 200.html
cp index.html 200.html

# Start deploying via Surge
# The command means deploy current folder to domain hin-photo-app
surge . hin-photo-app.surge.sh