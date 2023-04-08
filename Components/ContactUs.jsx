// Code adapted from https://docs.expo.dev/versions/latest/sdk/mail-composer/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as MailComposer from 'expo-mail-composer';
import { Container, Header, Title, Content, Icon, Card, CardItem, Item, Body, Right, Input, Form, Textarea, Left } from 'native-base'
// import * as Print from 'expo-print';

const ContactUs = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  // const [name, setName] = useState(undefined);
  const [recipients, setRecipients] = useState(['tourbruadmn123@gmail.com']);
  const [subject, setSubject] = useState(undefined);
  const [body, setBody] = useState(undefined);
  // const [email, setEmail] = useState(undefined);

  //Check if email is setup on the user's android phone
  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }
    checkAvailability();
  }, []);

  //Fetch and send mail to gmail app
  const sendMail = async () => {
    // const { uri } = await Print.printToFileAsync({
    //   html: "<h1>PDF Attachment!</h1>"
    // });

    MailComposer.composeAsync({
      subject: subject,
      body: body,
      recipients: recipients,
      // attachments: [uri]
    });
  };
 
  return (
    <View style={styles.container}>
       <Header androidStatusBarColor="#1362af" style={{ backgroundColor: '#1976D2' }}></Header>
      <Text>Enter your subject:</Text>
      <TextInput value={subject} onChangeText={setSubject} placeholder="Enter your subject"/>
      <Text>Enter your name:</Text>
      <Text>Enter your enquries:</Text>
      <TextInput value={body} onChangeText={setBody} placeholder="Enter your enquiries" />
      {isAvailable ? <Button title='Send Mail' onPress={sendMail} /> : <Text>Not email is setup in your phone</Text>}
      <StatusBar style="auto" />
    </View>
  );
}
export default ContactUs;
    {/* <Button title='Add Recipient' onPress={addRecipient} />
      {showRecipients()} */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Hey i make change to this code 