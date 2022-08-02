import React, {useEffect} from 'react';
import {Row, Col, Card, Button, Form, Dropdown} from 'react-bootstrap';
import {useAppDispatch} from "../../app/hooks";
import {adduser, deleteUser} from "./userSlice";
import {AiFillEdit} from "react-icons/ai";
import {editUser} from "./userSlice";

interface Props {
    setAddHuman: React.Dispatch<React.SetStateAction<boolean>>,
    addHuman: boolean,
    currentUser?: { name: string, id: number } | null | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<{ name: string, id: number } | null | undefined>>,
}

const AddHuman: React.FC<Props> = (props) => {

    const {addHuman, setAddHuman, currentUser, setCurrentUser} = props
    const [name, setName] = React.useState<string>()

    const dispatch = useAppDispatch()

    const [validated, setValidated] = React.useState<boolean>(false)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            if (currentUser) {
                if (name != null) {
                    const cu = {...currentUser}
                    cu.name = name;
                    dispatch(editUser(cu))
                    setName('')
                    setAddHuman(true)
                    setCurrentUser(null);
                }
            } else {
                const user = {
                    name,
                    id: Date.now()
                }
                dispatch(adduser(user))
                setName('')
            }

        }
    };

    const handelDeleteHuman = () => {
        dispatch(deleteUser(currentUser?.id))
        setAddHuman(true)
        setCurrentUser(null);
    }

    const handelEditHuman = () => {
        setAddHuman(true)
        setName(currentUser?.name)
    }

    useEffect(() => {
        if (currentUser === null) {
            setName('')
        }
    }, [currentUser])

    return (
        <Row>
            <Col md={12}>
                <Card>
                    <Card.Body>
                        <Row className='align-items-center'>
                            <Col md={2}>
                                <div className='imageBox'>
                                    <div className='userName'>
                                        {currentUser ? currentUser.name.slice(0, 2) : 'HN'}
                                    </div>
                                </div>
                            </Col>
                            <Col md={8}>
                                {addHuman ? (
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row>
                                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    onChange={e => setName(e.target.value)}
                                                    value={name? name: ''}
                                                />
                                            </Form.Group>
                                            {currentUser ? (
                                                <Col>
                                                    <Button type="submit" variant="success">Edit human</Button>
                                                </Col>
                                            ) : (
                                                <Col>
                                                    <Button type="submit" variant="success">Add human</Button>
                                                </Col>
                                            )}
                                        </Row>
                                    </Form>
                                ) : (
                                    <div>
                                        <div>{currentUser?.name} <AiFillEdit cursor='pointer'
                                                                             onClick={handelEditHuman}/></div>
                                    </div>
                                )}
                            </Col>
                            {!addHuman && (
                                <Col>
                                    <Col md={2}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdownDelete">
                                                ...
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handelDeleteHuman}>Delete human</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Col>
                            )}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default AddHuman;