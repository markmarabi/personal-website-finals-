<template>
  <div class="contact">
    <h2>Connect with Me</h2>
    <form @submit.prevent="sendMessage">
      <label>Email Address</label>
      <input 
        type="email" 
        v-model="email" 
        placeholder="Enter your email" 
        required
      />

      <label>Message</label>
      <textarea 
        v-model="message" 
        placeholder="Write your message here" 
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div v-if="messages.length" class="inbox">
      <h3>Recent Messages</h3>
      <div v-for="m in messages" :key="m.id" class="message-box">
        <p><strong>{{ m.email }}</strong></p>
        <p>{{ m.message }}</p>
        <small>{{ new Date(m.created_at).toLocaleString() }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const message = ref('')
const messages = ref([])
const successMessage = ref('')
const errorMessage = ref('')

async function loadMessages() {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
  if (!error) messages.value = data
}

async function sendMessage() {
  successMessage.value = ''
  errorMessage.value = ''
  const { error } = await supabase
    .from('messages')
    .insert([{ email: email.value, message: message.value }])
  if (error) {
    errorMessage.value = 'Failed to send message. Please try again.'
  } else {
    successMessage.value = 'Your message has been sent successfully!'
    email.value = ''
    message.value = ''
    loadMessages()
  }
}

onMounted(loadMessages)
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: left;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #333;
}

input, textarea {
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
}

button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #2563eb;
}

.success {
  color: green;
  margin-top: 1rem;
}

.error {
  color: red;
  margin-top: 1rem;
}

.inbox {
  margin-top: 2rem;
}

.message-box {
  border-top: 1px solid #ddd;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
}
</style>
