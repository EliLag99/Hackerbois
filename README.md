# The repos for Highfield Hack

## Configuration of Environment (Windows)

1. Create project folder
2. Open VS Code inside project folder
3. Open terminal and clone into [git repository](https://github.com/EliLag99/Hackerbois)
4. Open Terminal and run `react-native init App`
5. Run `cd App`
6. Open `android/gradle/gradle-wrapper.properties` and change version from 6.2 to 6.3
7. Add in `android/` a file called local.properties with this line `sdk.dir = C:\\Users\\your_username\\AppData\\Local\\Android\\Sdk`
8. Switch to development branch by running `git checkout development`
> Remove the conflicting files shown in the App directory
9. Run project with `react-native run-android`
