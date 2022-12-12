import { createClient } from "@supabase/supabase-js";
import * as params from '@params';

window.createSupabase = () => {
    return createClient(params.APP_SUPABASE_URL, params.APP_SUPABASE_KEY);
};

