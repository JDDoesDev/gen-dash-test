<?php

namespace Drupal\genuine_oauth2_connector\Plugin\Oauth2Client;

/**
 * OAuth2 Client to authenticate with Jira.
 *
 * @Oauth2Client(
 *   id = "jira",
 *   name = @Translation("Jira"),
 *   grant_type = "authorization_code",
 *   client_id = "OauthKey",
 *   client_secret = "########",
 *   authorization_uri = "https://api.instagram.com/oauth/authorize",
 *   token_uri = "https://api.instagram.com/oauth/access_token",
 *   resource_owner_uri = "",
 *   scopes = ["basic", "firebase", "openid"],
 *   scope_separator = ",",
 * )
 */
class JiraPlugin extends Oauth2ClientPluginBase {}
