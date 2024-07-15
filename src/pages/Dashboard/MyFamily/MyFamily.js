import React, { useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import "./MyFamily.css";
const MyFamily = () => {
  const [family, setFamily] = useState([
    { id: 1, name: "Ayman Mandy", phone: "01012345679", relationship: "Me" },
    { id: 2, name: "Nada Ahmed", phone: "01012345679", relationship: "Wife" },
    { id: 3, name: "Sara Amhed", phone: "01012345679", relationship: "Son" },
  ]);

  const [editing, setEditing] = useState(null);
  const [showInputs, setShowInputs] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    phone: "",
    relationship: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMember((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = family.length + 1;
    const newMemberWithId = { id: newId, ...newMember };
    setFamily([...family, newMemberWithId]);
    setNewMember({ name: "", phone: "", relationship: "" });
    setShowInputs(false);
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSave = (id, updatedMember) => {
    setFamily((prevState) =>
      prevState.map((member) => {
        if (member.id === id) {
          return { ...member, ...updatedMember };
        }
        return member;
      })
    );
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  return (
    <div className="container myFamily">
      <h1 className=" mb-3">My Family</h1>
      {showInputs ? (
        <Form onSubmit={handleSubmit} className="mb-2">
          <Row className="mb-2">
            <Col md={4}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newMember.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="phone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={newMember.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="relationship">
                <Form.Label>Relationship:</Form.Label>
                <Form.Control
                  type="text"
                  name="relationship"
                  value={newMember.relationship}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className="mx-2">
            Add Member
          </Button>
          <Button onClick={() => setShowInputs(false)}>Cancel</Button>
        </Form>
      ) : (
        <Button onClick={() => setShowInputs(true)}>Add Family Member</Button>
      )}
      <Table hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Relationship</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {family.map((member) => (
            <tr key={member.id}>
              <td>
                {editing === member.id ? (
                  <Form.Control
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(event) =>
                      handleSave(member.id, { name: event.target.value })
                    }
                  />
                ) : (
                  member.name
                )}
              </td>
              <td>
                {editing === member.id ? (
                  <Form.Control
                    type="text"
                    name="phone"
                    value={member.phone}
                    onChange={(event) =>
                      handleSave(member.id, { phone: event.target.value })
                    }
                  />
                ) : (
                  member.phone
                )}
              </td>
              <td>
                {editing === member.id ? (
                  <Form.Control
                    type="text"
                    name="relationship"
                    value={member.relationship}
                    onChange={(event) =>
                      handleSave(member.id, {
                        relationship: event.target.value,
                      })
                    }
                  />
                ) : (
                  member.relationship
                )}
              </td>
              <td>
                {editing === member.id ? (
                  <>
                    <Button
                      variant="success"
                      className="mx-2"
                      onClick={() => handleSave(member.id, member)}
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handleEdit(member.id)}
                  >
                    Update Info
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyFamily;
