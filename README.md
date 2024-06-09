# This is React Basics File, created for practice. 🚀
# @Sanika Kulkarni


# Things to Recap
## 1.1 while igniting app first time
    1. GIT configuration
    2. npm init - to achieve dependencies. pacjage.json will generated with versions configuration.
    3. npm install -D parcel - it will generate packege-lock.json with exact versions. Also, node-modules has been installed that will fetch dependencies in nested way which is known as tarnsitive dependency. we should include packege.json and packege-lock.json inside git, not node-modules as packege.json and packege-lock.json are able to fetch dependencies. We can ignore it using .gotignore.Add dist and parcel-cache also.
    4. We can add react using npm install react and npm install react-dom
    5. To start server using parcel, you can use npx parcel index.html
    6. To configure project for different browsers, we need to solve problem of versions. It can be achieved by configuring browser support list in package.json
    We can write - "browserlist": ["last 2 versions"]
    
## 1.2 Parcel Usage
- Building Application
- Local Server Creation
- HMR - Hot Module Replacement
- File Watching Algorithm to faster the application whicj is in C++
- Faster Builds using caching
- Image Optimization
- Minification of file
- Bundling 
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - Pracel takes care of all version support of browser. It will create build accordingly.
- Diagnostic
- Error Handling
- Host app on https
- Tree Shaking 
- Different bundles for Dev and Production (as production build takes more time to build).