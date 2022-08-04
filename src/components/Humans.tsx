import React, {useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ShowHumans from "./ShowHumans";
import AddHuman from "../features/user/AddHuman";
import {useAppSelector} from "../app/hooks";
import {selectUser} from "../features/user/userSlice";
import TextField from "@mui/material/TextField";


const Humans: React.FC = () => {
    const [addHuman, setAddHuman] = React.useState<boolean>(true)
    const users = useAppSelector(selectUser)

    const [allUsers, setAllUsers] = React.useState<any[]>([]);
    const [currentUser, setCurrentUser] = React.useState<{ name: string, id: number } | null>()

    const inputHandler = (e:any) => {
        //convert input text to lower case
        const lowerCase = e.target.value.toLowerCase();
        setAllUsers(users.filter(user => user.name.indexOf(lowerCase) !== -1));
    };

    useEffect(() => {
        if (users.length) {
            setAllUsers(users)
        }
    }, [users])

    return (
        <Container className='pt-2'>
            <Row>
                <Col xs={6} md={4}>
                    <Col md={12} className={'mb-3'}>
                        <TextField
                            id="outlined-basic"
                            onChange={inputHandler}
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </Col>
                    <ShowHumans setAddHuman={setAddHuman} users={allUsers} setCurrentUser={setCurrentUser}/>
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