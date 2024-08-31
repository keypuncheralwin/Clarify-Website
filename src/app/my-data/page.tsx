import Image from 'next/image';
import Link from 'next/link';

export default function MyData() {
  return (
    <div className="page-container">
      <h2>Managing Your Data with Clarify</h2>

      <h3>Clearing Your History</h3>
      <p>
        You can clear all your analyzed links within the app by navigating to the <strong>Account</strong> screen. Under <strong>General Settings</strong>, tap on <em>&apos;Clear History&apos;</em>. You will be asked to confirm this action. Once you&apos;ve confirmed, all the links you&apos;ve analyzed and stored in your history will be cleared.
      </p>
      <Image src="/ClearHistory.jpg" alt="Screenshot of Clear History option in the app" width={768} height={1447} />

      <h3>Deleting Your Account</h3>
      <p>
        If you wish to delete your Clarify account, first log into the app. Then, head to the <strong>Account</strong> screen and scroll to the bottom where you&apos;ll see the <em>&apos;Delete Account&apos;</em> button.
      </p>
      <Image src="/DeleteAccount1.jpg" alt="Screenshot of Delete Account button in the app" width={768} height={1455} />

      <p>
        Once you tap on the <em>&apos;Delete Account&apos;</em> button, you will be asked to confirm your decision. Upon confirmation, your account, including your email address and name, will be permanently deleted from our system.
      </p>
      <Image src="/DeleteAccount2.jpg" alt="Screenshot of Delete Account confirmation in the app" width={768} height={1447} />

      <h3>Contact Us</h3>
      <p>
        If you have any questions or need assistance with deleting your data, please contact us at <a href="mailto:clarifyapp38@gmail.com">clarifyapp38@gmail.com</a> and we will process your request promptly.
      </p>
      <button type="submit" className="notify-button">
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
}
