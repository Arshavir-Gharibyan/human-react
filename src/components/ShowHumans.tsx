import React from 'react';
import {InputGroup, Button, Form, Col, Row, ButtonGroup, Dropdown, DropdownButton, Card} from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineUserAdd} from "react-icons/ai";


interface Props {
    users: any[],
    setAddHuman: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentUser: React.Dispatch<React.SetStateAction<{ name: string, id: number } | null | undefined>>,
}

const ShowHumans: React.FC<Props> = (props) => {
    const {setAddHuman, users, setCurrentUser} = props

    const handelAddHuman = () => {
        setAddHuman(true)
        setCurrentUser(null);
    }

    const selectedUser = (user: { name: string, image: string, id: number }) => {
        setCurrentUser(user)
        setAddHuman(false)
    }

    return (
        <>
            <Row>
                <Col md={12}>
                    <InputGroup className="mb-3">
                        <Button variant="outline-secondary" id="button-addon1">
                            <AiOutlineSearch cursor="pointer"/>
                        </Button>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <Button variant="outline-secondary" onClick={handelAddHuman}> <AiOutlineUserAdd
                        cursor="pointer"/> Add Human </Button>{' '}
                </Col>
                <Col md={6}>
                    <DropdownButton
                        className='w-100'
                        as={ButtonGroup}
                        key='Secondary'
                        id={`dropdown-variants-Secondary`}
                        variant='secondary'
                        title='All Humans'
                    >
                        <Dropdown.Item eventKey="1">All Humans</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                {users.length > 0 ? (
                    <Col md={12} className='pt-2'>
                        {users.map((user: { name: string, image: string, id: number }, index) =>
                            <Card key={index} className='userCard' onClick={() => selectedUser(user)}>
                                <Card.Body>
                                    <Row className='align-items-center'>
                                        <Col md={4}>
                                            <div className='imageBox w-75'>
                                                <div className='userNameSmall'>
                                                    {user.name.slice(0, 2)}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            {user.name}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                ) : (
                    <div/>
                )}
            </Row>
        </>
    );
};

export default ShowHumans;