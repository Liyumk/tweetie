/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { api } from "~/utils/api";
import { object, string } from "zod";

export const tweetSchema = object({
  text: string({
    required_error: "Tweet text is required",
  })
    .min(10)
    .max(280),
});

export function CreateTweet() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const utils = api.useContext();

  const { mutateAsync } = api.tweet.create.useMutation({
    onSuccess: () => {
      setText("");
      utils.tweet.timeline.invalidate();
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      tweetSchema.parse({ text });
    } catch (e) {
      setError(e.message);
      return;
    }
    await mutateAsync({ text });
  };
  return (
    <>
      {error && JSON.stringify(error)}
      <form onSubmit={handleSubmit} className="flex w-full flex-col px-4">
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="px-4 pb-5 pt-1"
        />
        <div className="mt-4 flex justify-end">
          <button
            className="rounded-md bg-primary px-4 py-2 text-white"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateTweet;
