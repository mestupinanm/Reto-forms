import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Post(props) {
    const [likes, setLikes] = useState(props.likes);
    const [inputText, setInputText] = useState("Hola");
    const renderLikes = () => {
        if (likes === 0) return "Give us a like";
        else return "Likes" + likes;
    };
    const handleLikes = () => {
        console.log("Button clicked...");
        setLikes(likes + 1);
        console.log(likes)
    };
    function handleChange(e) {
        setInputText(e.target.value);
      }

    return (
        <Col>
            <Card style={{ width: "18rem" }}>
            <Card.Body className="mb-3">
                <Card.Title>{props.author}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                <Card.Text>{renderLikes()}</Card.Text>
                <input value = {inputText} onChange={handleChange}/>

                <Button variant="primary" onClick={handleLikes}> Like </Button>
            </Card.Body>
            </Card>
        </Col>
    );
}


export default Post;