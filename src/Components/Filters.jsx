import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Filters.css'


export default function Filters(){
    return(
        <>
        <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Dietary Preferences</Accordion.Header>
                <Accordion.Body>
                    <Form className='text-start ps-2'>
                        <Form.Check type="radio" name="Dietary" id="Dietary1" label="Vegan"/>
                        <Form.Check type="radio" name="Dietary" id="Dietary2" label="Gluten-Free"/>
                        <Form.Check type="radio" name="Dietary" id="Dietary3" label="Lactose-Free"/>
                        <Form.Check type="radio" name="Dietary" id="Dietary4" label="Nut-Free"/>
                    </Form>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Price Range</Accordion.Header>
                <Accordion.Body>
                    <Form className='text-start'>
                        <Form.Check type="radio" name="Price" id="Price1" label="(Under €10)"/>
                        <Form.Check type="radio" name="Price" id="Price2" label="(€10 - €20)"/>
                        <Form.Check type="radio" name="Price" id="Price3" label="(€20 - €30)"/>
                        <Form.Check type="radio" name="Price" id="Price4" label="(€30 - €40)"/>
                        <Form.Check type="radio" name="Price" id="Price5" label="(Over €40)"/>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Allergens</Accordion.Header>
                <Accordion.Body>
                    <Form className='text-start'>
                        <Form.Check type="radio" name="Allergens" id="Allergens1" label="Contains Nuts"/>
                        <Form.Check type="radio" name="Allergens" id="Allergens2" label="Contains Gluten"/>
                        <Form.Check type="radio" name="Allergens" id="Allergens3" label="Contains Lactose"/>
                        <Form.Check type="radio" name="Allergens" id="Allergens4" label="Other Allergens"/>
                        <Form.Check type="radio" name="Allergens" id="Allergens5" label="Allergen-Free"/>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button as="input" type="reset" value="Reset" className='w-100 mt-2' style={{backgroundColor:'olive', borderColor:'olive'}} />
        </>
    )
}