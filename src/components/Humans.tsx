import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ShowHumans from "./ShowHumans";
import AddHuman from "../features/user/AddHuman";
import {useAppSelector} from "../app/hooks";
import {selectUser} from "../features/user/userSlice";


const Humans: React.FC = () => {
    const [addHuman, setAddHuman] = React.useState<boolean>(true)
    const users = useAppSelector(selectUser)

    const [currentUser, setCurrentUser] = React.useState<{ name: string, id: number } | null>()

    return (
        <Container className='pt-2'>
            <Row>
                <Col xs={6} md={4}>
                    <ShowHumans setAddHuman={setAddHuman} users={users} setCurrentUser={setCurrentUser}/>
                </Col>
                <Col xs={12} md={8}>
                    <AddHuman addHuman={addHuman} setAddHuman={setAddHuman} currentUser={currentUser}
                              setCurrentUser={setCurrentUser}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Humans;