import React, { useState } from "react";
import "./App.css";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = () => {
    // Handle user sign-up logic here
    // Example: Make API request to your backend to register the user
  };

  const handleLogin = () => {
    // Handle user login logic here
    // Example: Make API request to your backend to authenticate the user
    // If successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
    <aside className="sidemenu">
      <div className="smbuton">
        <div className="logo">
          {" "}
          <p>COMPANY NAME</p>
        </div>
      </div>
    </aside>
    <section className="chatbox">
        <div className="inpholder">
          <label htmlFor="file-input" className="upload-button">
            Choose File
          </label>
          <input
            type="file"
            accept="image/*"
            className="file-input"
            id="file-input"
            onChange={handleImageChange}
          />
          {uploadedImage && (
            <div className="uploaded-image">
              <img
                style={{ width: "400px", height: "200px" }}
                src={uploadedImage}
                alt="Uploaded"
              />
            </div>
          )}

          {isAuthenticated ? (
            <button className="upload">UPLOAD</button>
          ) : (
            <><div className="sidemenu" id="signin">
               <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="auth-button" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
             <br />
              <div className="sidemenu" id="login"> <button className="auth-button" onClick={handleLogin}>
                Login
              </button></div>
             
            </>
          )}

          <textarea rows="1" className="chattext"></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
