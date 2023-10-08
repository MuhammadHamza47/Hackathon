import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";

import Sidebar from "../../components/Sidebar/Sidebar";

const initialState = {
  name: "",
  age: "",
  email: "",
};

export default function Student() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault(); // Fix the typo here

    let { name, age, email } = state;

    name = name.trim();
    email = email.trim();
    age = Number(age);

    if (name.length < 3) {
      window.toastify(`Name length must be greater than 2`, "error");
      return;
    }
    if (!age || age < 1) {
        window.toastify(`age km hai`, "error");
        return;
      }
      

    setIsLoading(true)
    let productId = Math.random().toString(36).slice(2);
    let formData = { name, age, email, productId };

    try {
      await setDoc(doc(firestore, "products", productId), formData);
      console.log("Document written with ID: ", productId);
      window.toastify(`Document written with ID: ${productId}`, "success");
    } catch (e) {
      console.error("Error adding document: ", e);
      window.toastify(`Error adding document: ${e.message}`, "error");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Sidebar />
      <div className="container mt-5 d-flex justify-content-end">
        <div className="col-10">
          <div className="row mb-3 d-flex justify-content-between">
            <div className="col-6">
              <h1>Student Data</h1>
            </div>
            <div className="col-2">
              {/* Button to trigger the modal */}
              <button
                className="btn btn-sm btn-outline-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              >
                Add Student
              </button>
            </div>
          </div>
          {/* Read Table */}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>22</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>23</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Larry the Bird</td>
                <td>20</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          {/* Modal */}
          <div className="modal fade" id="editModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Add Student</h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                <div className="row mb-3">
                      <div className="col">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="name"
                            onChange={handleChange}
                          />
                          <label for="floatingInput">Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div class="form-floating mb-3">
                          <input
                            type="nymber"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="age"
                            onChange={handleChange}
                          />
                          <label for="floatingInput">Age</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            onChange={handleChange}
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>
                    </div>             
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                  onClick={handleSubmit}
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                   Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
