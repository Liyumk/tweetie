# Tweetie - Twitter Clone

  

Tweetie is a simple Twitter clone that demonstrates the basic functionalities of Twitter. It allows users to create a tweet, like and unlike a tweet, and list all the tweets.

## Installation

To install Tweetie, you need to follow the below steps:
 
1. Clone this repository by running the following command in your terminal:

2. Navigate to the tweetie directory:

3. Install the dependencies: `npm install`

4. Create a `.env` file in the root directory of the project and copy the variables in `.env.example`.

5. Start the server: `npm run dev`


To get the `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET`, you need to create a new application on the [Discord Developer Portal](https://discord.com/developers/applications). Here's how you can do that:


1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in with your Discord account.

2. Click on the "New Application" button.

3. Enter a name for your application and click "Create".

4. On the left sidebar, click on "OAuth2".

5. Scroll down to the "OAuth2 URL Generator" section and select "http://localhost:3000/login" as the "Redirect URI".

6. Select the "bot" and "applications.commands" scopes.

7. Copy the "Client ID" and paste it as the `DISCORD_CLIENT_ID` value in your `.env` file.

8. Click on the "Generate" button next to "Client Secret" and paste the generated value as the `DISCORD_CLIENT_SECRET` value in your `.env` file.

9. Click on the "Save Changes" button.

## Usage

Once you have installed Tweetie, you can use it by following the below steps:

1. Create a tweet by writing a tweet and clicking on the "Tweet" button.

2. Like or unlike a tweet by clicking on the "Heart" icon.

3. View tweets on the timeline page
