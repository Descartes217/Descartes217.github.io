
// Reference contact messages collection
var messages_ref = firebase.database().ref().child('contact_messages');

// Listen submit form
document.getElementById('contact_form').addEventListener('submit', submit_form);

// submit form
function submit_form(e) {
    e.preventDefault();

    // Get values
    var name = get_input_val('name')
    var phone = get_input_val('phone')
    var email = get_input_val('email')
    var message = get_input_val('message')

    save_message(name, phone, email, message);

    console.log(name, phone, email, message);

};

// Function to get form values
function get_input_val(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function save_message(name, phone, email, message) {
    var new_message_ref = messages_ref.push()
    new_message_ref.set({
        name: name,
        phone: phone,
        email: email,
        message: message,
        created_at: Date.now()
    });


}