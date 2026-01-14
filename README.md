# CNC Feedrate Calculator

## Features

- Uses of a simple workflow based around selecting the material, cutting tool, and operation type.
- Calculates chipload and depth of cut using a pre-canned material database.
- Takes the cutter geometry into account to calculate chip thinning, which sometimes necessitates higher feedrate.
- Configured with NEM's specific machine and router setup.
- Semi-hidden "advanced mode" allows for more flexible operation.

## To run locally:

In a [development container](https://containers.dev/) (using `./devcontainer/devcontainer.json`):

```sh
bundle install
bundle exec jekyll serve
```