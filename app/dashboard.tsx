import { router } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ToogleSwitch from 'toggle-switch-react-native'
function dashboard() {

    const [sametoAll, setSametoAllState] = useState(false)
    const [availableMirrors, setAvailableMirrors] = useState([
        {
            'mirror_name': 'mirror1',
            'mirror_description': 'description'
        }, {
            'mirror_name': 'mirror 2',
            'mirror_description': 'description'
        },
    ])
    return (
        <View>
            <ScrollView>
                <View style={{
                    backgroundColor: "#1170D1",
                    borderBottomLeftRadius: 20,
                    borderEndEndRadius: 20,
                    padding: 20
                }}><Text style={{
                    color: 'white',
                    fontSize: 20
                }}>Hi Amal</Text>
                    <Text style={{
                        color: 'gray',
                        fontSize: 15
                    }}>Welcom Back</Text>

                    <View style={{
                        marginVertical: 10
                    }}>

                        <ToogleSwitch
                            isOn={sametoAll}
                            onColor="black"
                            offColor="white"
                            size="medium"
                            onToggle={() => setSametoAllState(!sametoAll)} />

                    </View>

                    <Text style={{ color: 'white' }}>
                        Enable this tomakecontent ofall displays with SOA Mirror Content.
                    </Text>

                    <View style={{
                        backgroundColor: 'white',
                        opacity: .3,
                        padding: 20,
                        borderRadius: 10,
                        marginTop: 10

                    }}>
                        <Text style={{ color: 'black' }}>SOA Mirror</Text>
                        <Text style={{ color: 'black' }}>Common Mirror for all zone Mirrors.</Text>
                    </View>



                </View>



                <View style={{
                    padding: 20
                }}>


                    <TextInput
                        style={{
                            height: 40,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingLeft: 10,
                            width: '100%',
                            marginBottom: 20,
                        }}
                        placeholder="Enter your text here" />
                    <View style={{
                        paddingVertical: 10
                    }}>
                        <Text>Zone Mode</Text>
                        <Text>Enable this to make content of display of this zone the same as zone mirror</Text>
                        <View style={{
                            marginVertical: 10
                        }}>

                            <ToogleSwitch
                                isOn={sametoAll}
                                onColor="black"
                                offColor="white"
                                size="medium"
                                onToggle={() => setSametoAllState(!sametoAll)} />

                        </View>
                        <View style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                            marginTop: 10,
                            borderWidth: 1

                        }}>
                            <Text style={{ color: 'black' }}>Zone Mirror</Text>
                            <Text style={{ color: 'black' }}>Common Mirror for all zone Mirrors.</Text>
                        </View>
                    </View>

                    <View>
                        <Text>Available Mirrors</Text>
                        <Text>Enable this to make content of display of this zone the same as zone mirror</Text>
                        <View>
                            {availableMirrors.map((mirror, key) => {
                                return (
                                    <TouchableOpacity style={{
                                        backgroundColor: 'white',
                                        padding: 20,
                                        borderRadius: 10,
                                        marginTop: 10,
                                        borderWidth: 1

                                    }}
                                    onPress={()=>router.push('/contents')}
                                    >
                                        <Text style={{ color: 'black' }}>{mirror.mirror_name}</Text>
                                        <Text style={{ color: 'black' }}>{mirror.mirror_description}</Text>
                                    </TouchableOpacity>
                                )
                            })}


                        </View>


                    </View>



                </View>
            </ScrollView>

        </View>
    )
}

export default dashboard