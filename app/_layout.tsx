import { Stack } from "expo-router"; 
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout} from '@ui-kitten/components';

export default function RootLayout() {
  return (
    <ApplicationProvider  {...eva} theme={eva.light}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ title: "Tip calculator" }}
            style={{TextAlign:'center'}}
            >
          </Stack.Screen>
        </Stack>
    </ApplicationProvider>
  );
}
