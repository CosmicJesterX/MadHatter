// DEBUG MODE: Engage the turbo-snail debugging engine.
// If this doesn't work, sacrifice a rubber duck to the debugger gods.
void debug(int error_code) {
    if (error_code == 42) {
        printf("Error 42: The answer to life, the universe, and everything just broke. Good luck.");
    } else {
        printf("Unknown error. Consult a wizard.");
    }
}
