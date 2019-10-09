<?php

use Drupal\webform\Entity\Webform;
use Drupal\Core\Serialization\Yaml;
use Mrjoops\OAuth2\Client\Provider\Jira;

$autoloader = require_once 'autoload.php';

$provider = new Mrjoops\OAuth2\Client\Provider\Jira([
  'clientId'                => 'OauthKey',    // The client ID assigned to you by the provider
  'clientSecret'            => 'XXXXXX',    // The client password assigned to you by the provider
  'redirectUri'             => 'http://gen-dash-test.docksal/authorized.php',
  'urlAuthorize'            => 'https://jddoesdev.atlassian.net/request-token',
  'urlAccessToken'          => file_get_contents('./jira_publickey.pem'),
]);

if (!isset($_GET['code'])) {

  // If we don't have an authorization code then get one
  $authUrl = $provider->getAuthorizationUrl();
  $_SESSION['oauth2state'] = $provider->getState();
  header('Location: '.$authUrl);
  exit;

// Check given state against previously stored one to mitigate CSRF attack
} elseif (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {

  unset($_SESSION['oauth2state']);
  exit('Invalid state');

} else {

  // Try to get an access token (using the authorization code grant)
  $token = $provider->getAccessToken('authorization_code', [
      'code' => $_GET['code']
  ]);

  // Optional: Now you have a token you can look up a users profile data
  try {

      // We got an access token, let's now get the user's details
      $user = $provider->getResourceOwner($token);

      // Use these details to create a new profile
      printf('Hello %s!', $user->getNickname());

  } catch (Exception $e) {

      // Failed to get user details
      exit('Oh dear...');
  }

  // Use this to interact with an API on the users behalf
  echo $token->getToken();
}

$request = $provider->getAuthenticatedRequest(
  Jira::METHOD_GET,
  $provider->getApiUrl() . '/rest/api/3/myself',
  $token
);
