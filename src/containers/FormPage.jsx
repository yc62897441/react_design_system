import styled from 'styled-components'
import { TitleH4 } from '../components/miniComponents/Titles'
import { Form, FormGroup, Label, Input, InputRange, Select, Option, Fieldset, Legend, Textarea } from '../components/miniComponents/FormComponents'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10%;
`

function FormPage() {
    return (
        <div>
            <h1>改變視窗大小，看 Form 各元件的 RWD</h1>
            <Wrapper>
                <Form>
                    <TitleH4 color={'black'}>表單表頭 TitleH4</TitleH4>
                    <FormGroup>
                        <Label htmlFor="">Input text</Label>
                        <Input type="text" placeholder="請輸入..." />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="cowbell">Input range</Label>
                        <InputRange type="range" id="cowbell" name="cowbell" min="0" max="100" step="10" />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="start">Input date</Label>
                        <Input type="date" id="start" name="trip-start" />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label htmlFor="">Select</Label>
                        <Select name="" id="">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label htmlFor="">Input checkbox</Label>
                        <Fieldset>
                            <Legend>Choose your monster's features:</Legend>
                            <div>
                                <Input type="checkbox" id="scales" name="scales" />
                                <Label for="scales">Scales</Label>
                            </div>
                            <div>
                                <Input type="checkbox" id="horns" name="horns" />
                                <Label for="horns">Horns</Label>
                            </div>
                        </Fieldset>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label htmlFor="">Input radio</Label>
                        <Fieldset>
                            <Legend>Select a maintenance drone:</Legend>
                            <div>
                                <Input type="radio" id="huey" name="drone" value="huey" />
                                <Label for="huey">Huey</Label>
                            </div>
                            <div>
                                <Input type="radio" id="dewey" name="drone" value="dewey" />
                                <Label for="dewey">Dewey</Label>
                            </div>
                            <div>
                                <Input type="radio" id="louie" name="drone" value="louie" />
                                <Label for="louie">Louie</Label>
                            </div>
                        </Fieldset>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="story">Textarea</Label>
                        <Textarea id="story" name="story" rows="5" cols="33">
                            It was a dark and stormy night...
                        </Textarea>
                    </FormGroup>
                </Form>
            </Wrapper>
        </div>
    )
}

export default FormPage
