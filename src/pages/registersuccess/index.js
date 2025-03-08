import * as React from 'react';
import { LayoutOne, Card, Text, Button } from 'upkit';
import { Link } from 'react-router-dom';

export default function RegisterSuccess(){
    return (
        <LayoutOne size="small">
            <Card color="white">
                <div className="text-center">
                    <Text as="h3">
                        Register Success
                    </Text>
                    <Text>
                        Please log in to the application
                    </Text>
                    <br/>

                    <Link to="/login">
                        <Button fitContainer>
                            Login
                        </Button>
                    </Link>
                </div>
            </Card>
        </LayoutOne>
    )
}