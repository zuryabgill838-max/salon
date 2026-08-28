"use client";

import { useState } from "react";

type ContactButtonProps = {
  text: string;
};

export default function ContactButton({
  text,
}: ContactButtonProps) {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowText(!showText)}
        className="w-full rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
      >
        {text}
      </button>

      {showText && (
        <p className="mt-4 text-center text-green-600">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  );
}