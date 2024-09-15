layout('us'); // Set keyboard layout to US

// Step 1: Open the Run dialog (Windows + R) and type in a fake system wipe message
press("GUI r");
delay(500);
type("cmd /k echo WARNING: SYSTEM FAILURE DETECTED! INITIALIZING DATA WIPE...\n");
delay(2000);  // Pause to create suspense

// Step 2: Display fake "Deleting files" message to scare the user
type("echo Deleting critical system files...\n");
delay(1500);
type("echo Deleting file 1 of 234987... C:/Windows/System32/config.sys\n");
delay(1500);
type("echo Deleting file 2 of 234987... C:/Windows/System32/drivers/etc/hosts\n");
delay(1500);
type("echo Deleting file 3 of 234987... C:/Users/YourFiles/ImportantDocument.docx\n");
delay(1500);
type("echo Please DO NOT SHUT DOWN your PC...\n");
delay(2000);

// Step 3: Add dramatic pauses with "..." for added tension
type("echo 10%\n");
delay(1000);
type("echo 25%\n");
delay(1000);
type("echo 50%\n");
delay(1000);
type("echo 75%\n");
delay(1000);
type("echo 99%\n");
delay(2000); // Pause longer before the big reveal

// Step 4: Reveal it's a joke
type("echo SYSTEM WIPE FAILED: Just kidding! 😜\n");
delay(2000);
type("echo Your system is fine. Have a great day!\n");

// Step 5: Open Notepad with another funny message
press("GUI r");
delay(500);
type("notepad\n");
delay(1000);
type("HAHA! Got you good, didn't I?\n");
type("No files were harmed in this prank. You're safe!\n");
type("Remember to back up your files though... just in case 😉.\n");
