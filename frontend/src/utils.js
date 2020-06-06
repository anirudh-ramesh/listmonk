import {
  ToastProgrammatic as Toast,
  DialogProgrammatic as Dialog,
} from 'buefy';

const reEmail = /(.+?)@(.+?)/ig;

export default class utils {
  static months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'];

  static days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Parses an ISO timestamp to a simpler form.
  static niceDate = (stamp, showTime) => {
    if (!stamp) {
      return '';
    }

    const d = new Date(stamp);
    let out = `${utils.days[d.getDay()]}, ${d.getDate()}`;
    out += ` ${utils.months[d.getMonth()]} ${d.getFullYear()}`;
    if (showTime) {
      out += ` ${d.getHours()}:${d.getMinutes()}`;
    }

    return out;
  };

  // Simple, naive, e-mail address check.
  static validateEmail = (e) => e.match(reEmail);

  static confirm = (msg, onConfirm, onCancel) => {
    Dialog.confirm({
      scroll: 'keep',
      message: !msg ? 'Are you sure?' : msg,
      onConfirm,
      onCancel,
    });
  };

  static prompt = (msg, inputAttrs, onConfirm, onCancel) => {
    Dialog.prompt({
      scroll: 'keep',
      message: msg,
      confirmText: 'OK',
      inputAttrs: {
        type: 'string',
        maxlength: 200,
        ...inputAttrs,
      },
      trapFocus: true,
      onConfirm,
      onCancel,
    });
  };

  static toast = (msg, typ) => {
    Toast.open({
      message: msg,
      type: !typ ? 'is-success' : typ,
      queue: false,
    });
  };
}
