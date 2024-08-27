import { useState } from 'react';
import { toast } from 'react-toastify';

export default function NotifyMeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://us-central1-clarify-c7c86.cloudfunctions.net/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, name:'', message: '' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast.success('You have successfully subscribed!');
        setEmail('');
      } else if (response.status === 400) {
        toast.info("You are already subscribed!");
        setEmail('');
      } else {
        toast.error('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="notify-me-form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="notify-button" disabled={loading}>
        {loading ? 'Subscribing...' : 'Notify Me'}
      </button>
    </form>
  );
}
