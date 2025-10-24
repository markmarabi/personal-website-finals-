<template>
  <section id="contact">
    <div class="video-background">
      <video autoplay muted loop>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="contact-content">
      <h2 class="title">Connect with Me</h2>
      <p class="section_text_p1">Leave your email and message below 👇</p>

      <form @submit.prevent="submitMessage" class="contact-form">
        <input
          type="email"
          v-model="email"
          placeholder="Your email address"
          required
        />
        <textarea
          v-model="message"
          placeholder="Your message..."
          required
        ></textarea>
        <button type="submit" class="btn btn-color-1">Send Message</button>
      </form>

      <p v-if="status" class="status">{{ status }}</p>

      <div v-if="messages.length > 0" class="messages-container">
        <h3>Guestbook Messages 💬</h3>
        <ul>
          <li v-for="msg in messages" :key="msg.id">
            <strong>{{ msg.email }}</strong>: {{ msg.message }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'

const email = ref('')
const message = ref('')
const status = ref('')
const messages = ref([])

const fetchMessages = async () => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error) messages.value = data
}

const submitMessage = async () => {
  if (!email.value || !message.value) return

  const { error } = await supabase.from('messages').insert([
    {
      email: email.value,
      message: message.value
    }
  ])

  if (error) {
    status.value = '❌ Something went wrong. Please try again.'
  } else {
    status.value = '✅ Message sent successfully!'
    email.value = ''
    message.value = ''
    fetchMessages()
  }
}

onMounted(fetchMessages)
</script>

<style scoped>
.contact-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
}

.contact-form button {
  margin-top: 1rem;
}

.status {
  margin-top: 1rem;
  color: #ffd700;
}

.messages-container {
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
