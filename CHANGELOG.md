# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Allowed Types of change: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`

## Unreleased

- SC-4577 school specific privacy policy can be added by the school admin. If school specific privacy policy is exists it is shown to every school user by the registration, first login and in the footer of the page. If it was changed the privacy policy should be confirmed by every school user

### Changed

## ## [23.0.0] - 2020-05-19

### Changed in 23.0.0

- `controllableData`-mixin [#799](https://github.com/schul-cloud/nuxt-client/pull/799) as a helper for optionaly syncable props. Check [the documentation for more details](./docs/1-Tutorials/OptionalyPropControllableData.md).

## [22.10.0] - 2020.05.11

### Changed in 22.10.0

- `controllableData`-mixin [#799](https://github.com/schul-cloud/nuxt-client/pull/799) as a helper for optionaly syncable props. Check [the documentation for more details](./docs/1-Tutorials/OptionalyPropControllableData.md).

## [1.1.1]

### Changed

- New Legacy Client Fallback Routing - Read the new instructions [here](/1-Tutorials/FallbackRoutingForOldClient.md). For deployment of the nuxt client, almost all variables that where required before can be removed. There is no need anymore for env variables of the old client. But there are two new ones: `LEGACY_CLIENT_URL` and `PROXY_LOG_LEVEL`. You can find out more in our [build documentation](0-GettingStarted/1-Build.md#http://localhost:4002/0-GettingStarted/1-Build.html#environment-variables-runtime).

## [1.1.0]

### Changed

- New Atomic Design Directory Structure - We now organize our components in a new way. Read more [here](/0-GettingStarted/3-DirectoryStructure.md#src-components).
