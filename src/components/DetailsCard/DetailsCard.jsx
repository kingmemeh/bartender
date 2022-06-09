import React from "react";
import bootstrap from "bootstrap";

export default function DetailsCard() {
    return (
        <Card className="text-center">
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Text>
                    { }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}