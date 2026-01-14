# CNC Feedrate Calculator

- Uses of a simple workflow based around selecting the material, cutting tool, and operation type.
- Takes the cutter geometry into account to calculate chip thinning, which sometimes necessitates higher feedrate.
- Configured with NEM's specific machine and router setup.
- Semi-hidden "advanced mode" allows for more flexible operation.

To run locally:

```sh
bundle install
bundle exec jekyll serve
```