import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Attendance = () => {
  return (
    <>
      <Sidebar />
      <div className="container d-flex justify-content-end">
        <div className="col-10">
          <div className="row d-flex justify-content-between">
            <div className="col-6">
              <h1>Attendance Data</h1>
            </div>
            <div className="col-3">
              {/* Button to trigger the modal */}
              <button
                className="btn btn-sm btn-outline-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              >
                Add Attendance
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
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Larry the Bird</td>
                <td >Larry the Bird</td>
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
                        />
                        <label for="floatingInput">Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                    <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          name="name"
                        />
                        <label for="floatingInput">Age</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                    <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          name="email"
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
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
