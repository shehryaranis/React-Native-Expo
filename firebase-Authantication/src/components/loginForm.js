import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

export class LoginForm extends Component {
    state = { email: '', password: '', userName: '' }

    onPressButton() {
        console.log('this.state', this.state)
    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="your full name"
                            label="User Name"
                            value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="******"
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection >

                    <CardSection />

                    <CardSection>

                        <Button onPress={this.onPressButton.bind(this)}>
                            Login
                        </Button >
                    </CardSection>

                </Card>
            </View>
        )
    }
}